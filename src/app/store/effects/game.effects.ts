import { Injectable } from "@angular/core";
import { from } from "rxjs";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as gameActions from '../actions/game.actions'
import { GameService } from "../../services/persistence/game.service";
import { switchMap, map, exhaustMap } from "rxjs/operators";
import { Game } from "src/app/models/content/game.model";

@Injectable()
export class GameEffects {

	constructor(private actions$: Actions, private afs : GameService) {}

		query$ = createEffect(() => this.actions$.pipe(
			ofType(gameActions.readGames),
			exhaustMap(() => this.afs.getAll().pipe(
					map((games) => gameActions.readGamesSuccess({games}))
			))
		))

		create$ = createEffect(() => this.actions$.pipe(
			ofType(gameActions.createGame),
			map(data => {
				const {type, ...game} = data
				this.afs.create(game)
			}),
			map(() => gameActions.createGameSuccess())
		))



	update$ = createEffect(() => this.actions$.pipe(
		ofType(gameActions.updateGame),
		map((action) => action),
		map(game => {
			this.afs.update(game)
		}),
		map(() => gameActions.updateGameSuccess())
	))

	delete$ = createEffect(() => this.actions$.pipe(
		ofType(gameActions.deleteGame),
		map(action => action),
		map(game => {
			this.afs.delete(game.id)
		}),
		map(()=> gameActions.deleteGameSuccess())
	))
}