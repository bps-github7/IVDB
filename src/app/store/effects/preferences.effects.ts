// angular core stuff + ngrx 
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

//firestore + rxjs
import { PreferencesService } from "src/app/services/persistence/preferences.service";
import { switchMap, exhaustMap, map } from "rxjs/operators";
import { from } from "rxjs";

// our model and actions
import { Preferences } from "src/app/models/user/preferences.model";
import * as preferencesActions from '../actions/preferences.actions'

@Injectable()
export class PreferencesEffects {

	constructor(private actions$: Actions, private afs : PreferencesService) {}

	query$ = createEffect(() => this.actions$.pipe(
		ofType(preferencesActions.readPreferences),
		exhaustMap(() => this.afs.getAll().pipe(
			map((preferences) => preferencesActions.readPreferencesSuccess({preferences}))
		))
	))

	create$ = createEffect(() => this.actions$.pipe(
		ofType(preferencesActions.createPreferences),
		map(data => {
			const {type, ...preferences} = data
			this.afs.create(preferences)
		}),
		map(() => preferencesActions.createPreferencesSuccess())
	))



	update$ = createEffect(() => this.actions$.pipe(
		ofType(preferencesActions.updatePreferences),
		map((action) => action),
		map(preferences => {
			this.afs.update(preferences)
		}),
		map(() => preferencesActions.updatePreferencesSuccess())
	))

	delete$ = createEffect(() => this.actions$.pipe(
		ofType(preferencesActions.deletePreferences),
		map(action => action),
		map(preferences => {
			this.afs.delete(preferences.id)
		}),
		map(()=> preferencesActions.deletePreferencesSuccess())
	))
}