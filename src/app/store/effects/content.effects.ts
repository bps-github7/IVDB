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
					map((contents) => contentActions.readContentSuccess({contents}))
			))
		))


	// todo: probably same problem as update- need to burrow deeper
	create$ = createEffect(() => this.actions$.pipe(
		ofType(contentActions.createContent),
		map(action => action),
		switchMap(data => {
			console.log("create effect got this:")
			console.log(data);
			const ref = this.afs.doc<Content>(`content/${data.id}`);
			return Observable.fromPromise(ref.set(data));
		}),
		map(() => contentActions.createContentSuccess())
	))



	// TODO: update method, we need to burrow further, got '{id, data, action.type} instead of {id, data}'
	update$ = createEffect(() => this.actions$.pipe(
		ofType(contentActions.updateContent),
		map(action => action),
		switchMap(data => {
			console.log(`going to update doc with id: ${data.id}\n and data:`)
			console.log(data);
			const ref = this.afs.doc<Content>(`content/${data.id}`)
			return Observable.fromPromise(ref.update(data))
		}),
		map(() => contentActions.updateContentSuccess())
	))

	//TODO: delete method: we are burrowing too far down into the data- got t,h,i,s, ,i,s, ,e,x,a,m,p,l,e instead of "this is example"

	delete$ = createEffect(() => this.actions$.pipe(
		ofType(contentActions.deleteContent),
		// map(action => action),
		switchMap(id => {
			console.log("delete effect:")
			console.log(id)
			const ref = this.afs.doc<Content>(`content/${id}`)
			return Observable.fromPromise(ref.delete())
		}),
		map(()=> contentActions.deleteContentSuccess())
	))
		
	
		

}