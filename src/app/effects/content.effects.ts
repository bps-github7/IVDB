import { ContentActions, QUERY, Success } from './../actions/content.actions';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Action } from "@ngrx/store";
import { Actions, Effect, createEffect, ofType } from "@ngrx/effects";

import { Content } from "../reducers/content.reducer";
import * as contentActions from '../actions/content.actions'

import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { switchMap, mergeMap, map } from "rxjs/operators";
import 'rxjs/add/observable/fromPromise';

@Injectable()
export class ContentEffects {

	constructor(private actions$: Actions, private afs : AngularFirestore) {}


	// BOY this caused a lot of headache. praise the docs!
	query$ = createEffect(() =>this.actions$.pipe(
		ofType(contentActions.QUERY),
		switchMap(action => {
			console.log(action);
			return this.afs.collection<Content>('content')
			.stateChanges()
		}),
		mergeMap(actions => actions),
		map(action => {
			return {
				type: `[Content] ${action.type}`,
				payload: {
					...action.payload.doc.data(),
					id: action.payload.doc.id
				}
			}
		})
	))
	
	
	update$ = createEffect(() => this.actions$.pipe(
		ofType(contentActions.UPDATE),
		map((action: contentActions.Update) => action),
		switchMap(data => {
			const ref = this.afs.doc<Content>(`content/${data.id}`)
			return Observable.fromPromise(ref.update(data.changes))
		}),
		map(() => new contentActions.Success())
	))

	create$ = createEffect(() => this.actions$.pipe(
		ofType(contentActions.ADDED),
		map((action: contentActions.Update) => action),
		switchMap(data => {
					//right... where does id come from in this instance?
			    const ref = this.afs.doc<Content>(`content/${data.id}`);
			    return Observable.fromPromise(ref.set(data))
			  }),
			map(() => new contentActions.Success())
	))

  // Listen for the 'DELETE' action
  // @Effect() _delete: Observable<Action> = this._actions.ofType(actions.DELETE)
  //   .map((action: actions.Delete) => action.id)
  //   .switchMap(id => {
  //     const ref = this._afs.doc<fromPizza.Pizza>(`pizzas/${id}`)
  //     return Observable.fromPromise(ref.delete())
  //   })
  //   .map(() => new actions.Success());
	delete$ = createEffect(() => this.actions$.pipe(
		ofType(contentActions.REMOVED),
		map((action: contentActions.Removed) => action),
		switchMap(id => {
			const ref = this.afs.doc<Content>(`contents/${id}`)
			return Observable.fromPromise(ref.delete())
		}),
		map(()=> new contentActions.Success())
	))
		
	
		

}