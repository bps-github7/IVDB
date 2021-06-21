import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Content } from "../reducers/content.reducer";
import * as contentActions from '../actions/content.actions'
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { switchMap, mergeMap, map } from "rxjs/operators";
import 'rxjs/add/observable/fromPromise';
import { of } from "rxjs";

@Injectable()
export class ContentEffects {

	constructor(private actions$: Actions, private afs : AngularFirestore) {}

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
		switchMap((action: contentActions.Added) => of(action.payload)),
		map(payload =>  {
			const ref = this.afs.doc<Content>("content");
			let uid;
			ref.valueChanges({idField : 'uid'}).subscribe(data => uid = data.uid)
			return Observable.fromPromise(ref.set({id : uid,  ...payload}))
		}),
		map(() => new contentActions.Success())
	))

	delete$ = createEffect(() => this.actions$.pipe(
		ofType(contentActions.REMOVED),
		map((action: contentActions.Removed) => action),
		switchMap(id => {
			const ref = this.afs.doc<Content>(`content/${id}`)
			return Observable.fromPromise(ref.delete())
		}),
		map(()=> new contentActions.Success())
	))
		
	
		

}