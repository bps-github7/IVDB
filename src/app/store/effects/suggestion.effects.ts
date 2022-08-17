import { Injectable } from "@angular/core";
import { from } from "rxjs";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Suggestion } from "src/app/models/contrib/suggestion.model";
import * as suggestionActions from '../actions/suggestion.actions'
import { switchMap, map, exhaustMap } from "rxjs/operators";
import { SuggestionService } from "src/app/services/persistence/suggestion.service";

@Injectable()
export class SuggestionEffects {

	constructor(private actions$: Actions, private afs : SuggestionService) {}

		query$ = createEffect(() => this.actions$.pipe(
			ofType(suggestionActions.readSuggestions),
			exhaustMap(() => this.afs.getAll().pipe(
					map((suggestions) => suggestionActions.readSuggestionsSuccess({suggestions}))
			))
		))


	create$ = createEffect(() => this.actions$.pipe(
		ofType(suggestionActions.createSuggestion),
		map(data => {
			const {type, ...suggestion} = data
			this.afs.create(suggestion)
		}),
		map(() => suggestionActions.createSuggestionSuccess())
	))



	update$ = createEffect(() => this.actions$.pipe(
		ofType(suggestionActions.updateSuggestion),
		map((action) => action),
		map(suggestion => {
			this.afs.update(suggestion)
		}),
		map(() => suggestionActions.updateSuggestionSuccess())
	))

	delete$ = createEffect(() => this.actions$.pipe(
		ofType(suggestionActions.deleteSuggestion),
		map(action => action),
		map(suggestion => {
			this.afs.delete(suggestion.id)
		}),
		map(()=> suggestionActions.deleteSuggestionSuccess())
	))
}