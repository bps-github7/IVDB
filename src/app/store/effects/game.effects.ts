import { Injectable } from "@angular/core";
import { from } from "rxjs";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as gameActions from '../actions/game.actions'
import { AngularFirestore } from "@angular/fire/firestore";
import { switchMap, map, exhaustMap } from "rxjs/operators";
import { Game } from "src/app/models/content/game.model";

@Injectable()
export class GameEffects {

	constructor(private actions$: Actions, private afs : AngularFirestore) {}

		query$ = createEffect(() => this.actions$.pipe(
			ofType(gameActions.readGames),
			exhaustMap(() => this.afs.collection<Game>('games').valueChanges().pipe(
					map((games) => gameActions.readGamesSuccess({games}))
			))
		))

		create$ = createEffect(() => this.actions$.pipe(
			ofType(gameActions.createGame),
			switchMap(data => {
				const {type, ...payload} = data
				const ref = this.afs.doc<Game>(`games/${data.id}`);
				return from(ref.set(payload));
			}),
			map(() => gameActions.createGameSuccess())
		))



	update$ = createEffect(() => this.actions$.pipe(
		ofType(gameActions.updateGame),
		map((action) => action),
		switchMap(game => {
			const ref = this.afs.doc<Game>(`games/${game.id}`)
			return from(ref.update({id : game.id,  ...game.data}))
		}),
		map(() => gameActions.updateGameSuccess())
	))

	delete$ = createEffect(() => this.actions$.pipe(
		ofType(gameActions.deleteGame),
		map(action => action),
		switchMap(action => {
			const ref = this.afs.doc<Game>(`games/${action.id}`)
			return from(ref.delete())
		}),
		map(()=> gameActions.deleteGameSuccess())
	))
}