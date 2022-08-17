import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as reviewActions from '../actions/review.actions'
import { ReviewService } from "src/app/services/persistence/review.service";
import { switchMap, map, exhaustMap } from "rxjs/operators";


@Injectable()
export class ReviewEffects {

	constructor(private actions$: Actions, private afs : ReviewService) {}

		query$ = createEffect(() => this.actions$.pipe(
			ofType(reviewActions.readReviews),
			exhaustMap(() => this.afs.getAll().pipe(
					map((reviews) => reviewActions.readReviewsSuccess({reviews}))
			))
		))

	create$ = createEffect(() => this.actions$.pipe(
		ofType(reviewActions.createReview),
		map(data => {
			const {type, ...review} = data
			this.afs.create(review)
		}),
		map(() => reviewActions.createReviewSuccess())
	))

	update$ = createEffect(() => this.actions$.pipe(
		ofType(reviewActions.updateReview),
		map((action) => action),
		map(review => {
			this.afs.update(review)
		}),
		map(() => reviewActions.updateReviewSuccess())
	))

	delete$ = createEffect(() => this.actions$.pipe(
		ofType(reviewActions.deleteReview),
		map(action => action),
		map(review => {
			this.afs.delete(review.id)
		}),
		map(()=> reviewActions.deleteReviewSuccess())
	))
}