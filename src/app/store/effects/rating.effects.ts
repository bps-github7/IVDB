import { Injectable } from "@angular/core";
import { from } from "rxjs";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Rating } from "src/app/models/contrib/rating.model";
import * as ratingActions from '../actions/rating.actions'
import { switchMap, map, exhaustMap } from "rxjs/operators";
import { RatingService } from "src/app/services/persistence/rating.service";

@Injectable()
export class RatingEffects {

	constructor(private actions$: Actions, private afs : RatingService) {}

		query$ = createEffect(() => this.actions$.pipe(
			ofType(ratingActions.readRatings),
			exhaustMap(() => this.afs.getAll().pipe(
					map((ratings) => ratingActions.readRatingsSuccess({ratings}))
			))
		))

	create$ = createEffect(() => this.actions$.pipe(
		ofType(ratingActions.createRating),
		map(data => {
			const {type, ...payload} = data
			this.afs.create(payload)
		}),
		map(() => ratingActions.createRatingSuccess())
	))

	update$ = createEffect(() => this.actions$.pipe(
		ofType(ratingActions.updateRating),
		map((action) => action),
		map(rating => {
			this.afs.update(rating)
		}),
		map(() => ratingActions.updateRatingSuccess())
	))

	delete$ = createEffect(() => this.actions$.pipe(
		ofType(ratingActions.deleteRating),
		map(action => action),
		map(action => {
			this.afs.delete(action.id)
		}),
		map(()=> ratingActions.deleteRatingSuccess())
	))
}