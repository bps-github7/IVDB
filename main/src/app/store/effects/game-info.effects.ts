// angular core stuff + ngrx 
import { Injectable } from "@angular/core";
import { from } from "rxjs";
import { Actions, createEffect, ofType } from "@ngrx/effects";

//firestore + rxjs
import { AngularFirestore  } from "@angular/fire/firestore";
import { switchMap, exhaustMap, map } from "rxjs/operators";

// our model and actions
import { GameInfo } from "src/app/models/content/game-info.model";
import * as gameInfoActions from '../actions/game-info.actions'

@Injectable()
export class GameInfoEffects {

	constructor(private actions$: Actions, private afs : AngularFirestore) {}

	query$ = createEffect(() => this.actions$.pipe(
		ofType(gameInfoActions.readGameInfo),
		exhaustMap(() => this.afs.collection<GameInfo>('game-info').valueChanges().pipe(
			map((gameInfo) => gameInfoActions.readGameInfoSuccess({gameInfo}))
		))
	))

	create$ = createEffect(() => this.actions$.pipe(
		ofType(gameInfoActions.createGameInfo),
		switchMap(data => {
			const {type, ...payload} = data
			const ref = this.afs.doc<GameInfo>(`game-info/${data.id}`);
			return from(ref.set(payload));
		}),
		map(() => gameInfoActions.createGameInfoSuccess())
	))



	update$ = createEffect(() => this.actions$.pipe(
		ofType(gameInfoActions.updateGameInfo),
		map((action) => action),
		switchMap(content => {
			const ref = this.afs.doc<GameInfo>(`game-info/${content.id}`)
			return from(ref.update({id : content.id,  ...content.data}))
		}),
		map(() => gameInfoActions.updateGameInfoSuccess())
	))

	delete$ = createEffect(() => this.actions$.pipe(
		ofType(gameInfoActions.deleteGameInfo),
		map(action => action),
		switchMap(action => {
			const ref = this.afs.doc<GameInfo>(`game-info/${action.id}`)
			return from(ref.delete())
		}),
		map(()=> gameInfoActions.deleteGameInfoSuccess())
	))
}