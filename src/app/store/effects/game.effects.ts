import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Game } from "../reducers/game.reducer";
import * as gameActions from '../actions/game.actions'
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { switchMap, mergeMap, map, exhaustMap } from "rxjs/operators";
// import { fromPromise } from "rxjs/internal-compatibility";

@Injectable()
export class GameEffects {

	constructor(private actions$: Actions, private afs : AngularFirestore) {}

		query$ = createEffect(() => this.actions$.pipe(
			ofType(gameActions.readGames),
			exhaustMap(() => this.afs.collection<Game>('games').valueChanges().pipe(
					map((games) => gameActions.readGamesSuccess({games}))
			))
		))


	// todo: probably same problem as update- need to burrow deeper
	create$ = createEffect(() => this.actions$.pipe(
		ofType(gameActions.createGame),
		// map((action) => action),
		switchMap(data => {
			// like to remove this line, if you can figure out how to do this with a pure fn instead.
			const {type, ...payload} = data
			const ref = this.afs.doc<Game>(`games/${data.id}`);
			return Observable.fromPromise(ref.set(payload));
		}),
		map(() => gameActions.createGameSuccess())
	))



	update$ = createEffect(() => this.actions$.pipe(
		ofType(gameActions.updateGame),
		map((action) => action),
		switchMap(game => {
			// console.log(`going to update doc with id: ${content.id}\n and data:`)
			// console.log(content.data);
			const ref = this.afs.doc<Game>(`content/${game.id}`)
			return Observable.fromPromise(ref.update({id : game.id,  ...game.data}))
		}),
		map(() => gameActions.updateGameSuccess())
	))

	delete$ = createEffect(() => this.actions$.pipe(
		ofType(gameActions.deleteGame),
		map(action => action),
		switchMap(action => {
			const ref = this.afs.doc<Game>(`games/${action.id}`)
			return Observable.fromPromise(ref.delete())
		}),
		map(()=> gameActions.deleteGameSuccess())
	))
}