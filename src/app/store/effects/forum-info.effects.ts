import { } from 'rxjs/operators';
// angular core stuff + ngrx 
import { Injectable } from "@angular/core";
import { from } from "rxjs";
import { Actions, createEffect, ofType } from "@ngrx/effects";

//firestore + rxjs
import { exhaustMap, switchMap, map } from "rxjs/operators";

// our model and actions
import { ForumInfoService } from 'src/app/services/persistence/forum-info.service';
import { ForumInfo } from "src/app/models/content/forum-info.model";
import * as forumInfoActions from '../actions/forum-info.actions'

@Injectable()
export class ForumInfoEffects {

	constructor(private actions$: Actions, private afs : ForumInfoService) {}

	query$ = createEffect(() => this.actions$.pipe(
		ofType(forumInfoActions.readForumInfo),
		exhaustMap(() => this.afs.getAll().pipe(
			map((forumInfo) => forumInfoActions.readForumInfoSuccess({forumInfo}))
		))
	))

	create$ = createEffect(() => this.actions$.pipe(
		ofType(forumInfoActions.createForumInfo),
		map(data => {
			const {type, ...payload} = data
      this.afs.create(payload)
		}),
		map(() => forumInfoActions.createForumInfoSuccess())
	))



	update$ = createEffect(() => this.actions$.pipe(
		ofType(forumInfoActions.updateForumInfo),
		map((action) => action),
			map(forumInfo => {
				this.afs.update(forumInfo)
		}),
		map(() => forumInfoActions.updateForumInfoSuccess())
	))

	delete$ = createEffect(() => this.actions$.pipe(
		ofType(forumInfoActions.deleteForumInfo),
		map(action => action),
			map(action => {
				this.afs.delete(action.id)
		}),
		map(()=> forumInfoActions.deleteForumInfoSuccess())
	))
}