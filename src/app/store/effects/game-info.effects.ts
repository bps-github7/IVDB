import { exhaustMap } from 'rxjs/operators';
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
import { GameInfo } from "src/app/models/game-info.model";
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
			return Observable.fromPromise(ref.set(payload));
		}),
		map(() => gameInfoActions.createGameInfoSuccess())
	))



	update$ = createEffect(() => this.actions$.pipe(
		ofType(gameInfoActions.updateGameInfo),
		map((action) => action),
		switchMap(content => {
			const ref = this.afs.doc<GameInfo>(`game-info/${content.id}`)
			return Observable.fromPromise(ref.update({id : content.id,  ...content.data}))
		}),
		map(() => gameInfoActions.updateGameInfoSuccess())
	))

	delete$ = createEffect(() => this.actions$.pipe(
		ofType(gameInfoActions.deleteGameInfo),
		map(action => action),
		switchMap(action => {
			const ref = this.afs.doc<GameInfo>(`game-info/${action.id}`)
			return Observable.fromPromise(ref.delete())
		}),
		map(()=> gameInfoActions.deleteGameInfoSuccess())
	))
}