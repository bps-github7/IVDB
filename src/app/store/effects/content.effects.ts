import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Content } from "../reducers/content.reducer";
import * as contentActions from '../actions/content.actions'
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { switchMap, mergeMap, map, exhaustMap } from "rxjs/operators";
import 'rxjs/add/observable/fromPromise';
import { EmptyError, of } from "rxjs";

@Injectable()
export class ContentEffects {

	constructor(private actions$: Actions, private afs : AngularFirestore) {}

	// query$ = createEffect(() =>this.actions$.pipe(
	// 	ofType(contentActions.readContent),
	// 	switchMap(action => {
	// 		console.log("got this far");
	// 		return this.afs.collection<Content>('content')
	// 		.stateChanges()
	// 	}),
	// 	mergeMap(actions => actions),
	// 	map(action => {
	// 		return {
	// 			type: `[Content] ${action.type}`,
	// 			payload: {
	// 				...action.payload.doc.data(),
	// 				id: action.payload.doc.id
	// 			}
	// 		}
	// 	})
	// ))

		query$ = createEffect(() => this.actions$.pipe(
			ofType(contentActions.readContent),
			exhaustMap(() => this.afs.collection<Content>('content').valueChanges().pipe(
					map((contents) => contentActions.readContentSuccess(contents))
			))
		))
	
	
	update$ = createEffect(() => this.actions$.pipe(
		ofType(contentActions.updateContent),
		map(action => action),
		switchMap(data => {
			const ref = this.afs.doc<Content>(`content/${data.id}`)
			return Observable.fromPromise(ref.update(data))
		}),
		map(() => contentActions.contentSuccess())
	))

	create$ = createEffect(() => this.actions$.pipe(
		ofType(contentActions.createContent),
		map(action => action),
		switchMap(data => {
		const ref = this.afs.doc<Content>(`content/${data.id}`);
		return Observable.fromPromise(ref.set(data));
		}),
		map(() => contentActions.contentSuccess())
	))

	delete$ = createEffect(() => this.actions$.pipe(
		ofType(contentActions.deleteContent),
		map(action => action.id),
		switchMap(id => {
			const ref = this.afs.doc<Content>(`content/${id}`)
			return Observable.fromPromise(ref.delete())
		}),
		map(()=> contentActions.contentSuccess())
	))
		
	
		

}