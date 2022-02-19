import { exhaustMap } from 'rxjs/operators';
// angular core stuff + ngrx 
import { Injectable } from "@angular/core";
import { from, Observable } from "rxjs";
import { Actions, createEffect, ofType } from "@ngrx/effects";

//firestore + rxjs
import { AngularFirestore  } from "@angular/fire/firestore";
import { switchMap, mergeMap, map } from "rxjs/operators";

import { of } from "rxjs";

// our model and actions
import { VideogameConsole } from "src/app/models/content/videogame-console.model";
import * as videogameConsoleActions from '../actions/videogame-console.actions'

@Injectable()
export class VideogameConsoleEffects {

	constructor(private actions$: Actions, private afs : AngularFirestore) {}

	query$ = createEffect(() => this.actions$.pipe(
		ofType(videogameConsoleActions.readVideogameConsole),
		exhaustMap(() => this.afs.collection<VideogameConsole>('consoles').valueChanges().pipe(
			map((videogameConsoles) => videogameConsoleActions.readVideogameConsoleSuccess({videogameConsoles}))
		))
	))

	create$ = createEffect(() => this.actions$.pipe(
		ofType(videogameConsoleActions.createVideogameConsole),
		switchMap(data => {
			const {type, ...payload} = data
			const ref = this.afs.doc<VideogameConsole>(`consoles/${data.id}`);
			return from(ref.set(payload));
		}),
		map(() => videogameConsoleActions.createVideogameConsoleSuccess())
	))



	update$ = createEffect(() => this.actions$.pipe(
		ofType(videogameConsoleActions.updateVideogameConsole),
		map((action) => action),
		switchMap(console => {
			const ref = this.afs.doc<VideogameConsole>(`consoles/${console.id}`)
			return from(ref.update({id : console.id,  ...console.data}))
		}),
		map(() => videogameConsoleActions.updateVideogameConsoleSuccess())
	))

	delete$ = createEffect(() => this.actions$.pipe(
		ofType(videogameConsoleActions.deleteVideogameConsole),
		map(action => action),
		switchMap(action => {
			const ref = this.afs.doc<VideogameConsole>(`consoles/${action.id}`)
			return from(ref.delete())
		}),
		map(()=> videogameConsoleActions.deleteVideogameConsoleSuccess())
	))
}