import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Content } from "src/app/models/content/content.model";
import * as contentActions from '../actions/content.actions'
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { switchMap, mergeMap, map, exhaustMap } from "rxjs/operators";
import 'rxjs/add/observable/fromPromise';
// import { fromPromise } from "rxjs/internal-compatibility";


@Injectable()
export class ContentEffects {

	constructor(private actions$: Actions, private afs : AngularFirestore) {}

		query$ = createEffect(() => this.actions$.pipe(
			ofType(contentActions.readContent),
			exhaustMap(() => this.afs.collection<Content>('content').valueChanges().pipe(
					map((contents) => contentActions.readContentSuccess({contents}))
			))
		))


	create$ = createEffect(() => this.actions$.pipe(
		ofType(contentActions.createContent),
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
			const ref = this.afs.doc<Content>(`content/${content.id}`)
			return Observable.fromPromise(ref.update({id : content.id,  ...content.data}))
		}),
		map(() => contentActions.updateContentSuccess())
	))

	delete$ = createEffect(() => this.actions$.pipe(
		ofType(contentActions.deleteContent),
		map(action => action),
		switchMap(action => {
			const ref = this.afs.doc<Content>(`content/${action.id}`)
			return Observable.fromPromise(ref.delete())
		}),
		map(()=> contentActions.deleteContentSuccess())
	))
}