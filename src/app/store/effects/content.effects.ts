import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Content } from "../reducers/content.reducer";
import * as contentActions from '../actions/content.actions'
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { switchMap, mergeMap, map, exhaustMap } from "rxjs/operators";
import 'rxjs/add/observable/fromPromise';

@Injectable()
export class ContentEffects {

	constructor(private actions$: Actions, private afs : AngularFirestore) {}

		query$ = createEffect(() => this.actions$.pipe(
			ofType(contentActions.readContent),
			exhaustMap(() => this.afs.collection<Content>('content').valueChanges().pipe(
					map((contents) => contentActions.readContentSuccess({contents}))
			))
		))


	// todo: probably same problem as update- need to burrow deeper
	create$ = createEffect(() => this.actions$.pipe(
		ofType(contentActions.createContent),
		// map((action) => action),
		switchMap(data => {
			const {type, ...payload} = data
			const ref = this.afs.doc<Content>(`content/${data.id}`);
			return Observable.fromPromise(ref.set(payload));
		}),
		map(() => contentActions.createContentSuccess())
	))



	update$ = createEffect(() => this.actions$.pipe(
		ofType(contentActions.updateContent),
		map((action) => action),
		switchMap(content => {
			// console.log(`going to update doc with id: ${content.id}\n and data:`)
			// console.log(content.data);
			const ref = this.afs.doc<Content>(`content/${content.id}`)
			return Observable.fromPromise(ref.update({id : content.id,  ...content.data}))
		}),
		map(() => contentActions.updateContentSuccess())
	))

	delete$ = createEffect(() => this.actions$.pipe(
		ofType(contentActions.deleteContent),
		map(action => action),
		switchMap(action => {
			// const {type, ...payload} = action
			// const id = Object.values(payload).join('');
			const ref = this.afs.doc<Content>(`content/${action.id}`)
			return Observable.fromPromise(ref.delete())
		}),
		map(()=> contentActions.deleteContentSuccess())
	))
}