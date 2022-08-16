import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as threadActions from '../actions/thread.actions'
import { switchMap, map, exhaustMap } from "rxjs/operators";
import { ThreadService } from "src/app/services/persistence/thread.service";

@Injectable()
export class ThreadEffects {

	constructor(private actions$: Actions, private afs : ThreadService) {}

		query$ = createEffect(() => this.actions$.pipe(
			ofType(threadActions.readThreads),
			exhaustMap(() => this.afs.getAll().pipe(
					map((threads) => threadActions.readThreadsSuccess({threads}))
			))
		))


	create$ = createEffect(() => this.actions$.pipe(
		ofType(threadActions.createThread),
		map(data => {
			const {type, ...thread} = data
			this.afs.create(thread)
		}),
		map(() => threadActions.createThreadSuccess())
	))



	update$ = createEffect(() => this.actions$.pipe(
		ofType(threadActions.updateThread),
		map((action) => action),
		map(thread => {
			this.afs.update(thread)
		}),
		map(() => threadActions.updateThreadSuccess())
	))

	delete$ = createEffect(() => this.actions$.pipe(
		ofType(threadActions.deleteThread),
		map(action => action),
		map(thread => {
			this.afs.delete(thread.id)
		}),
		map(()=> threadActions.deleteThreadSuccess())
	))
}