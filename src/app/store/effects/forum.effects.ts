// angular core stuff + ngrx 
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

//firestore + rxjs
import { switchMap, exhaustMap, map } from "rxjs/operators";

// our model and actions
import { ForumService } from "src/app/services/persistence/forum.service";
import * as forumActions from '../actions/forum.actions'

@Injectable()
export class ForumEffects {

	constructor(private actions$: Actions, private afs : ForumService) {}

	query$ = createEffect(() => this.actions$.pipe(
		ofType(forumActions.readForum),
		exhaustMap(() => this.afs.getAll().pipe(
			map((forums) => forumActions.readForumSuccess({forums}))
		))
	))

	create$ = createEffect(() => this.actions$.pipe(
		ofType(forumActions.createForum),
		map(data => {
			const {type, ...forum} = data
			this.afs.create(forum)
		}),
		map(() => forumActions.createForumSuccess())
	))



	update$ = createEffect(() => this.actions$.pipe(
		ofType(forumActions.updateForum),
		map((action) => action),
		map(forum => {
			this.afs.update(forum)
		}),
		map(() => forumActions.updateForumSuccess())
	))

	delete$ = createEffect(() => this.actions$.pipe(
		ofType(forumActions.deleteForum),
		map(action => action),
		map(forum => {
			this.afs.delete(forum.id)
		}),
		map(()=> forumActions.deleteForumSuccess())
	))
}