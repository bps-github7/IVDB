// import { GameActions, QUERY, Success } from './../actions/game.actions';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Action } from "@ngrx/store";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { Game } from "../reducers/game.reducer";
import * as gameActions from '../actions/game.actions'

import { AngularFirestore  } from "@angular/fire/firestore";
import { switchMap, mergeMap, map } from "rxjs/operators";
import 'rxjs/add/observable/fromPromise';

@Injectable()
export class GameEffects {

	constructor(private actions$: Actions, private afs : AngularFirestore) {}


	// BOY this caused a lot of headache. praise the docs!
	query$ = createEffect(() =>this.actions$.pipe(
		ofType(gameActions.QUERY),
		switchMap(action => {
			console.log(action);
			return this.afs.collection<Game>('games')
			.stateChanges()
		}),
		mergeMap(actions => actions),
		map(action => {
			return {
				type: `[Game] ${action.type}`,
				payload: {
					...action.payload.doc.data(),
					id: action.payload.doc.id
				}
			}
		})
	))
	
	
	update$ = createEffect(() => this.actions$.pipe(
		ofType(gameActions.UPDATE),
		map((action: gameActions.Update) => action),
		switchMap(data => {
			const ref = this.afs.doc<Game>(`games/${data.id}`)
			return Observable.fromPromise(ref.update(data.changes))
		}),
		map(() => new gameActions.Success())
	))

	create$ = createEffect(() => this.actions$.pipe(
		ofType(gameActions.ADDED),
		map((action: gameActions.Added) => action),
		switchMap(data => {
					//TODO: stuck problem solving here- the previous approach made no sense, but worked myteriously.... changed it but now we have bugs.
			    const ref = this.afs.doc<Game>("games");
			    return Observable.fromPromise(ref.set(data))
			  }),
			map(() => new gameActions.Success())
	))

  // Listen for the 'DELETE' action
  // @Effect() _delete: Observable<Action> = this._actions.ofType(actions.DELETE)
  //   .map((action: actions.Delete) => action.id)
  //   .switchMap(id => {
  //     const ref = this._afs.doc<fromPizza.Pizza>(`pizzas/${id}`)
  //     return Observable.fromPromise(ref.delete())
  //   })
  //   .map(() => new actions.Success());
	delete$ = createEffect(() => this.actions$.pipe(
		ofType(gameActions.REMOVED),
		map((action: gameActions.Removed) => action),
		switchMap(id => {
			const ref = this.afs.doc<Game>(`games/${id}`)
			return Observable.fromPromise(ref.delete())
		}),
		map(()=> new gameActions.Success())
	))
		
	
		

}