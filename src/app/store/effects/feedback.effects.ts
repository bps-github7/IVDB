import { Injectable } from "@angular/core";
import { from } from "rxjs";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Feedback } from "src/app/models/contrib/feedback.model";
import * as feedbackActions from '../actions/feedback.actions'
import { AngularFirestore } from "@angular/fire/firestore";
import { switchMap, map, exhaustMap } from "rxjs/operators";

@Injectable()
export class FeedbackEffects {

	constructor(private actions$: Actions, private afs : AngularFirestore) {}

		query$ = createEffect(() => this.actions$.pipe(
			ofType(feedbackActions.readFeedback),
			exhaustMap(() => this.afs.collection<Feedback>('feedback').valueChanges().pipe(
					map((feedback) => feedbackActions.readFeedbackSuccess({feedback}))
			))
		))


	create$ = createEffect(() => this.actions$.pipe(
		ofType(feedbackActions.createFeedback),
		switchMap(data => {
			const {type, ...payload} = data
			const ref = this.afs.doc<Feedback>(`feedback/${data.id}`);
			return from(ref.set(payload));
		}),
		map(() => feedbackActions.createFeedbackSuccess())
	))

	update$ = createEffect(() => this.actions$.pipe(
		ofType(feedbackActions.updateFeedback),
		map((action) => action),
		switchMap(feedback => {
			const ref = this.afs.doc<Feedback>(`feedback/${feedback.id}`)
			return from(ref.update({id : feedback.id,  ...feedback.data}))
		}),
		map(() => feedbackActions.updateFeedbackSuccess())
	))

	delete$ = createEffect(() => this.actions$.pipe(
		ofType(feedbackActions.deleteFeedback),
		map(action => action),
		switchMap(action => {
			const ref = this.afs.doc<Feedback>(`feedback/${action.id}`)
			return from(ref.delete())
		}),
		map(()=> feedbackActions.deleteFeedbackSuccess())
	))
}