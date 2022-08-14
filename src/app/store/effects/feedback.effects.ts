import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as feedbackActions from '../actions/feedback.actions'
import { FeedbackService } from '../../services/persistence/feedback.service'
import { switchMap, map, exhaustMap } from "rxjs/operators";

@Injectable()
export class FeedbackEffects {

	constructor(private actions$: Actions, private afs : FeedbackService) {}

		query$ = createEffect(() => this.actions$.pipe(
			ofType(feedbackActions.readFeedback),
			exhaustMap(() => this.afs.getAll().pipe(
					map((feedback) => feedbackActions.readFeedbackSuccess({feedback}))
			))
		))


	create$ = createEffect(() => this.actions$.pipe(
		ofType(feedbackActions.createFeedback),
		map(data => {
			const {type, ...payload} = data
			this.afs.create(payload)	
		}),
		map(() => feedbackActions.createFeedbackSuccess())
	))

	update$ = createEffect(() => this.actions$.pipe(
		ofType(feedbackActions.updateFeedback),
		map((action) => action),
		map(feedback => {
			this.afs.update(feedback)
		}),
		map(() => feedbackActions.updateFeedbackSuccess())
	))

	delete$ = createEffect(() => this.actions$.pipe(
		ofType(feedbackActions.deleteFeedback),
		map(action => action),
		map(action => {
			this.afs.delete(action.id)
		}),
		map(()=> feedbackActions.deleteFeedbackSuccess())
	))
}