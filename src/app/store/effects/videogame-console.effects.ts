import { Injectable } from "@angular/core";
import { switchMap, mergeMap, map, exhaustMap } from "rxjs/operators";
import { Observable } from "rxjs";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { DocumentData } from '@firebase/firestore';
import * as videogameConsoleActions from '../actions/videogame-console.actions'
import { VideogameConsoleService } from '../../services/persistence/videogame-console.service'

@Injectable()
export class VideogameConsoleEffects {

	consoles$: Observable<DocumentData>;

	constructor(
		private actions$: Actions, 
		private afs : VideogameConsoleService) {}
	
	query$ = createEffect(() => this.actions$.pipe(
		ofType(videogameConsoleActions.readVideogameConsole),
		exhaustMap(() => this.afs.getAll().pipe(
			map((videogameConsoles) => videogameConsoleActions.readVideogameConsoleSuccess({videogameConsoles}))
		))
	))

	create$ = createEffect(() => this.actions$.pipe(
		ofType(videogameConsoleActions.createVideogameConsole),
		// is map the operator we want for the following 3 methods???
		map(data => {
			const {type, ...payload} = data
			this.afs.create(payload)
		}),
		map(() => videogameConsoleActions.createVideogameConsoleSuccess())
	))

	update$ = createEffect(() => this.actions$.pipe(
		ofType(videogameConsoleActions.updateVideogameConsole),
		map((action) => action),
		map(console => {
			this.afs.update(console)
		}),
		map(() => videogameConsoleActions.updateVideogameConsoleSuccess())
	))

	delete$ = createEffect(() => this.actions$.pipe(
		ofType(videogameConsoleActions.deleteVideogameConsole),
		map(action => action),
		map(action => {
			this.afs.delete(action.id)
		}),
		map(()=> videogameConsoleActions.deleteVideogameConsoleSuccess())
	))
}	