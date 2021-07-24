import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Thread } from "src/app/models/contrib/thread.model";
import * as threadActions from '../actions/thread.actions'
import { AngularFirestore } from "@angular/fire/firestore";
import { switchMap, map, exhaustMap } from "rxjs/operators";
import 'rxjs/add/observable/fromPromise';


@Injectable()
export class ThreadEffects {

	constructor(private actions$: Actions, private afs : AngularFirestore) {}

		query$ = createEffect(() => this.actions$.pipe(
			ofType(threadActions.readThreads),
			exhaustMap(() => this.afs.collection<Thread>('threads').valueChanges().pipe(
					map((threads) => threadActions.readThreadsSuccess({threads}))
			))
		))


	create$ = createEffect(() => this.actions$.pipe(
		ofType(threadActions.createThread),
		switchMap(data => {
			const {type, ...payload} = data
			const ref = this.afs.doc<Thread>(`threads/${data.id}`);
			return Observable.fromPromise(ref.set(payload));
		}),
		map(() => threadActions.createThreadSuccess())
	))



	update$ = createEffect(() => this.actions$.pipe(
		ofType(threadActions.updateThread),
		map((action) => action),
		switchMap(thread => {
			const ref = this.afs.doc<Thread>(`threads/${thread.id}`)
			return Observable.fromPromise(ref.update({id : thread.id,  ...thread.data}))
		}),
		map(() => threadActions.updateThreadSuccess())
	))

	delete$ = createEffect(() => this.actions$.pipe(
		ofType(threadActions.deleteThread),
		map(action => action),
		switchMap(action => {
			const ref = this.afs.doc<Thread>(`threads/${action.id}`)
			return Observable.fromPromise(ref.delete())
		}),
		map(()=> threadActions.deleteThreadSuccess())
	))
}