// angular core stuff + ngrx 
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

//firestore + rxjs
import { AngularFirestore  } from "@angular/fire/firestore";
import { switchMap, exhaustMap, map } from "rxjs/operators";
import { from } from "rxjs";

// our model and actions
import { Forum } from "src/app/models/content/forum.model";
import * as forumActions from '../actions/forum.actions'

@Injectable()
export class ForumEffects {

	constructor(private actions$: Actions, private afs : AngularFirestore) {}

	query$ = createEffect(() => this.actions$.pipe(
		ofType(forumActions.readForum),
		exhaustMap(() => this.afs.collection<Forum>('forums').valueChanges().pipe(
			map((forums) => forumActions.readForumSuccess({forums}))
		))
	))

	create$ = createEffect(() => this.actions$.pipe(
		ofType(forumActions.createForum),
		switchMap(data => {
			const {type, ...payload} = data
			const ref = this.afs.doc<Forum>(`forums/${data.id}`);
			return from(ref.set(payload));
		}),
		map(() => forumActions.createForumSuccess())
	))



	update$ = createEffect(() => this.actions$.pipe(
		ofType(forumActions.updateForum),
		map((action) => action),
		switchMap(forum => {
			const ref = this.afs.doc<Forum>(`forums/${forum.id}`)
			return from(ref.update({id : forum.id,  ...forum.data}))
		}),
		map(() => forumActions.updateForumSuccess())
	))

	delete$ = createEffect(() => this.actions$.pipe(
		ofType(forumActions.deleteForum),
		map(action => action),
		switchMap(action => {
			const ref = this.afs.doc<Forum>(`forums/${action.id}`)
			return from(ref.delete())
		}),
		map(()=> forumActions.deleteForumSuccess())
	))
}