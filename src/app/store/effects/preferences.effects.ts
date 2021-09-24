// angular core stuff + ngrx 
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

//firestore + rxjs
import { AngularFirestore  } from "@angular/fire/firestore";
import { switchMap, exhaustMap, map } from "rxjs/operators";
import { from } from "rxjs";

// our model and actions
import { Preferences } from "src/app/models/user/preferences.model";
import * as preferencesActions from '../actions/preferences.actions'

@Injectable()
export class PreferencesEffects {

	constructor(private actions$: Actions, private afs : AngularFirestore) {}

	query$ = createEffect(() => this.actions$.pipe(
		ofType(preferencesActions.readPreferences),
		exhaustMap(() => this.afs.collection<Preferences>('preferences').valueChanges().pipe(
			map((preferences) => preferencesActions.readPreferencesSuccess({preferences}))
		))
	))

	create$ = createEffect(() => this.actions$.pipe(
		ofType(preferencesActions.createPreferences),
		switchMap(data => {
			const {type, ...payload} = data
			const ref = this.afs.doc<Preferences>(`preferences/${data.id}`);
			return from(ref.set(payload));
		}),
		map(() => preferencesActions.createPreferencesSuccess())
	))



	update$ = createEffect(() => this.actions$.pipe(
		ofType(preferencesActions.updatePreferences),
		map((action) => action),
		switchMap(preference => {
			const ref = this.afs.doc<Preferences>(`preferences/${preference.id}`)
			return from(ref.update({id : preference.id,  ...preference.data}))
		}),
		map(() => preferencesActions.updatePreferencesSuccess())
	))

	delete$ = createEffect(() => this.actions$.pipe(
		ofType(preferencesActions.deletePreferences),
		map(action => action),
		switchMap(action => {
			const ref = this.afs.doc<Preferences>(`preferences/${action.id}`)
			return from(ref.delete())
		}),
		map(()=> preferencesActions.deletePreferencesSuccess())
	))
}