import { Injectable } from "@angular/core";
import { from } from "rxjs";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Suggestion } from "src/app/models/contrib/suggestion.model";
import * as suggestionActions from '../actions/suggestion.actions'
import { AngularFirestore } from "@angular/fire/firestore";
import { switchMap, map, exhaustMap } from "rxjs/operators";


@Injectable()
export class SuggestionEffects {

	constructor(private actions$: Actions, private afs : AngularFirestore) {}

		query$ = createEffect(() => this.actions$.pipe(
			ofType(suggestionActions.readSuggestions),
			exhaustMap(() => this.afs.collection<Suggestion>('suggestions').valueChanges().pipe(
					map((suggestions) => suggestionActions.readSuggestionsSuccess({suggestions}))
			))
		))


	create$ = createEffect(() => this.actions$.pipe(
		ofType(suggestionActions.createSuggestion),
		switchMap(data => {
			const {type, ...payload} = data
			const ref = this.afs.doc<Suggestion>(`suggestions/${data.id}`);
			return from(ref.set(payload));
		}),
		map(() => suggestionActions.createSuggestionSuccess())
	))



	update$ = createEffect(() => this.actions$.pipe(
		ofType(suggestionActions.updateSuggestion),
		map((action) => action),
		switchMap(suggestion => {
			const ref = this.afs.doc<Suggestion>(`suggestions/${suggestion.id}`)
			return from(ref.update({id : suggestion.id,  ...suggestion.data}))
		}),
		map(() => suggestionActions.updateSuggestionSuccess())
	))

	delete$ = createEffect(() => this.actions$.pipe(
		ofType(suggestionActions.deleteSuggestion),
		map(action => action),
		switchMap(action => {
			const ref = this.afs.doc<Suggestion>(`suggestions/${action.id}`)
			return from(ref.delete())
		}),
		map(()=> suggestionActions.deleteSuggestionSuccess())
	))
}