import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Suggestion } from "src/app/models/contrib/suggestion.model";
import * as suggestionActions from '../actions/suggestion.actions'
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { switchMap, mergeMap, map, exhaustMap } from "rxjs/operators";
import 'rxjs/add/observable/fromPromise';


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
			return Observable.fromPromise(ref.set(payload));
		}),
		map(() => suggestionActions.createSuggestionSuccess())
	))



	update$ = createEffect(() => this.actions$.pipe(
		ofType(suggestionActions.updateSuggestion),
		map((action) => action),
		switchMap(suggestion => {
			const ref = this.afs.doc<Suggestion>(`suggestions/${suggestion.id}`)
			return Observable.fromPromise(ref.update({id : suggestion.id,  ...suggestion.data}))
		}),
		map(() => suggestionActions.updateSuggestionSuccess())
	))

	delete$ = createEffect(() => this.actions$.pipe(
		ofType(suggestionActions.deleteSuggestion),
		map(action => action),
		switchMap(action => {
			const ref = this.afs.doc<Suggestion>(`suggestions/${action.id}`)
			return Observable.fromPromise(ref.delete())
		}),
		map(()=> suggestionActions.deleteSuggestionSuccess())
	))
}