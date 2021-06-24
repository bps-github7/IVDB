import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Action } from "@ngrx/store";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { Game } from "../reducers/game.reducer";
import * as gameActions from '../actions/game.actions'

import { AngularFirestore  } from "@angular/fire/firestore";
import { switchMap, mergeMap, map } from "rxjs/operators";
import 'rxjs/add/observable/fromPromise';
import { of } from "rxjs";

@Injectable()
export class GameEffects {

	constructor(private actions$: Actions, private afs : AngularFirestore) {}

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
		switchMap((action: gameActions.Added) => of(action.payload)),
		map(payload =>  {
			const ref = this.afs.doc<Game>("games");
			return Observable.fromPromise(ref.set(payload))
		}),
		map(() => new gameActions.Success())
	))

	delete$ = createEffect(() => this.actions$.pipe(
		ofType(gameActions.REMOVED),
		map((action: gameActions.Removed) => action.payload.id),
		switchMap(id => {
			const ref = this.afs.doc<Game>(`games/${id}`)
			return Observable.fromPromise(ref.delete())
		}),
		map(()=> new gameActions.Success())
	))
}