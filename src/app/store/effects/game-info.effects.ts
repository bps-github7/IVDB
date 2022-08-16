import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { switchMap, exhaustMap, map } from "rxjs/operators";
import { GameInfoService } from "src/app/services/persistence/game-info.service";
import * as gameInfoActions from '../actions/game-info.actions'

@Injectable()
export class GameInfoEffects {

	constructor(private actions$: Actions, private afs : GameInfoService) {}

	query$ = createEffect(() => this.actions$.pipe(
		ofType(gameInfoActions.readGameInfo),
		exhaustMap(() => this.afs.getAll().pipe(
			map((gameInfo) => gameInfoActions.readGameInfoSuccess({gameInfo}))
		))
	))

	create$ = createEffect(() => this.actions$.pipe(
		ofType(gameInfoActions.createGameInfo),
		map(data => {
			const {type, ...payload} = data
			this.afs.create(payload)
		}),
		map(() => gameInfoActions.createGameInfoSuccess())
	))



	update$ = createEffect(() => this.actions$.pipe(
		ofType(gameInfoActions.updateGameInfo),
		map((action) => action),
		map(content => {
			this.afs.update(content)
		}),
		map(() => gameInfoActions.updateGameInfoSuccess())
	))

	delete$ = createEffect(() => this.actions$.pipe(
		ofType(gameInfoActions.deleteGameInfo),
		map(action => action),
		map(action => {
			this.afs.delete(action.id)
		}),
		map(()=> gameInfoActions.deleteGameInfoSuccess())
	))
}