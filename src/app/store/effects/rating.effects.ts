import { Injectable } from "@angular/core";
import { from } from "rxjs";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Rating } from "src/app/models/contrib/rating.model";
import * as ratingActions from '../actions/rating.actions'
import { AngularFirestore } from "@angular/fire/firestore";
import { switchMap, map, exhaustMap } from "rxjs/operators";

@Injectable()
export class RatingEffects {

	constructor(private actions$: Actions, private afs : AngularFirestore) {}

		query$ = createEffect(() => this.actions$.pipe(
			ofType(ratingActions.readRatings),
			exhaustMap(() => this.afs.collection<Rating>('ratings').valueChanges().pipe(
					map((ratings) => ratingActions.readRatingsSuccess({ratings}))
			))
		))


	create$ = createEffect(() => this.actions$.pipe(
		ofType(ratingActions.createRating),
		switchMap(data => {
			const {type, ...payload} = data
			const ref = this.afs.doc<Rating>(`ratings/${data.id}`);
			return from(ref.set(payload));
		}),
		map(() => ratingActions.createRatingSuccess())
	))



	update$ = createEffect(() => this.actions$.pipe(
		ofType(ratingActions.updateRating),
		map((action) => action),
		switchMap(rating => {
			const ref = this.afs.doc<Rating>(`ratings/${rating.id}`)
			return from(ref.update({id : rating.id,  ...rating.data}))
		}),
		map(() => ratingActions.updateRatingSuccess())
	))

	delete$ = createEffect(() => this.actions$.pipe(
		ofType(ratingActions.deleteRating),
		map(action => action),
		switchMap(action => {
			const ref = this.afs.doc<Rating>(`ratings/${action.id}`)
			return from(ref.delete())
		}),
		map(()=> ratingActions.deleteRatingSuccess())
	))
}