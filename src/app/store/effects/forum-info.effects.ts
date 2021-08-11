import { } from 'rxjs/operators';
// angular core stuff + ngrx 
import { Injectable } from "@angular/core";
import { from } from "rxjs";
import { Actions, createEffect, ofType } from "@ngrx/effects";

//firestore + rxjs
import { AngularFirestore  } from "@angular/fire/firestore";
import { exhaustMap, switchMap, map } from "rxjs/operators";

// our model and actions
import { ForumInfo } from "src/app/models/content/forum-info.model";
import * as forumInfoActions from '../actions/forum-info.actions'

@Injectable()
export class ForumInfoEffects {

	constructor(private actions$: Actions, private afs : AngularFirestore) {}

	query$ = createEffect(() => this.actions$.pipe(
		ofType(forumInfoActions.readForumInfo),
		exhaustMap(() => this.afs.collection<ForumInfo>('forum_info').valueChanges().pipe(
			map((forumInfo) => forumInfoActions.readForumInfoSuccess({forumInfo}))
		))
	))

	create$ = createEffect(() => this.actions$.pipe(
		ofType(forumInfoActions.createForumInfo),
		switchMap(data => {
			const {type, ...payload} = data
			const ref = this.afs.doc<ForumInfo>(`forum_info/${data.id}`);
			return from(ref.set(payload));
		}),
		map(() => forumInfoActions.createForumInfoSuccess())
	))



	update$ = createEffect(() => this.actions$.pipe(
		ofType(forumInfoActions.updateForumInfo),
		map((action) => action),
		switchMap(forumInfo => {
			const ref = this.afs.doc<ForumInfo>(`forum_info/${forumInfo.id}`)
			return from(ref.update({id : forumInfo.id,  ...forumInfo.data}))
		}),
		map(() => forumInfoActions.updateForumInfoSuccess())
	))

	delete$ = createEffect(() => this.actions$.pipe(
		ofType(forumInfoActions.deleteForumInfo),
		map(action => action),
		switchMap(action => {
			const ref = this.afs.doc<ForumInfo>(`forum_info/${action.id}`)
			return from(ref.delete())
		}),
		map(()=> forumInfoActions.deleteForumInfoSuccess())
	))
}