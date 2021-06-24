// angular core stuff + ngrx 
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Actions, createEffect, ofType } from "@ngrx/effects";

//firestore + rxjs
import { AngularFirestore  } from "@angular/fire/firestore";
import { switchMap, mergeMap, map } from "rxjs/operators";
import 'rxjs/add/observable/fromPromise';
import { of } from "rxjs";

// our model and actions
import { GameInfo } from "../reducers/game-info.reducer";
import * as gameInfoActions from '../actions/game-info.actions'


@Injectable()
export class GameInfoEffects {

	constructor(private actions$: Actions, private afs : AngularFirestore) {}

	query$ = createEffect(() =>this.actions$.pipe(
		ofType(gameInfoActions.QUERY),
		switchMap(action => {
			return this.afs.collection<GameInfo>('game-info')
			.stateChanges()
		}),
		mergeMap(actions => actions),
		map(action => {
			return {
				type: `[GameInfo] ${action.type}`,
				payload: {
					...action.payload.doc.data(),
					id: action.payload.doc.id
				}
			}
		})
	))
	
  // Listen for the 'QUERY' action, must be the first effect you trigger
		// query$ = createEffect(() => this.actions$.pipe(
		// 	ofType(gameInfoActions.QUERY),
    // 	switchMap(action => {
    // 	  const ref = this.afs.collection<GameInfo>('game-info');
    // 	  return ref.snapshotChanges().pipe(
		// 			map(arr => {
		// 				return arr.map(doc => {
		// 					const data = doc.payload.doc.data();
		// 					return {
		// 						id: doc.payload.doc.id,
		// 						...data
		// 					} as GameInfo; 
		// 				})
		// 			})
		// 		)
			
    // 	})
		// )
	
	update$ = createEffect(() => this.actions$.pipe(
		ofType(gameInfoActions.UPDATE),
		map((action: gameInfoActions.Update) => action),
		switchMap(data => {
			const ref = this.afs.doc<GameInfo>(`game-info/${data.id}`)
			return Observable.fromPromise(ref.update(data.changes))
		}),
		map(() => new gameInfoActions.Success())
	))

	create$ = createEffect(() => this.actions$.pipe(
		ofType(gameInfoActions.ADDED),
		switchMap((action: gameInfoActions.Added) => of(action.payload)),
		map(payload =>  {
			const ref = this.afs.doc<GameInfo>("game-info");
			return Observable.fromPromise(ref.set(payload))
		}),
		map(() => new gameInfoActions.Success())
	))

	delete$ = createEffect(() => this.actions$.pipe(
		ofType(gameInfoActions.REMOVED),
		map((action: gameInfoActions.Removed) => action.payload.id),
		switchMap(id => {
			const ref = this.afs.doc<GameInfo>(`game-info/${id}`)
			return Observable.fromPromise(ref.delete())
		}),
		map(()=> new gameInfoActions.Success())
	))
}