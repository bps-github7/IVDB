import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Review } from "src/app/models/contrib/review.model";
import * as reviewActions from '../actions/review.actions'
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { switchMap, mergeMap, map, exhaustMap } from "rxjs/operators";
import 'rxjs/add/observable/fromPromise';


@Injectable()
export class ReviewEffects {

	constructor(private actions$: Actions, private afs : AngularFirestore) {}

		query$ = createEffect(() => this.actions$.pipe(
			ofType(reviewActions.readReviews),
			exhaustMap(() => this.afs.collection<Review>('reviews').valueChanges().pipe(
					map((reviews) => reviewActions.readReviewsSuccess({reviews}))
			))
		))


	create$ = createEffect(() => this.actions$.pipe(
		ofType(reviewActions.createReview),
		switchMap(data => {
			const {type, ...payload} = data
			const ref = this.afs.doc<Review>(`reviews/${data.id}`);
			return Observable.fromPromise(ref.set(payload));
		}),
		map(() => reviewActions.createReviewSuccess())
	))



	update$ = createEffect(() => this.actions$.pipe(
		ofType(reviewActions.updateReview),
		map((action) => action),
		switchMap(review => {
			const ref = this.afs.doc<Review>(`reviews/${review.id}`)
			return Observable.fromPromise(ref.update({id : review.id,  ...review.data}))
		}),
		map(() => reviewActions.updateReviewSuccess())
	))

	delete$ = createEffect(() => this.actions$.pipe(
		ofType(reviewActions.deleteReview),
		map(action => action),
		switchMap(action => {
			const ref = this.afs.doc<Review>(`reviews/${action.id}`)
			return Observable.fromPromise(ref.delete())
		}),
		map(()=> reviewActions.deleteReviewSuccess())
	))
}