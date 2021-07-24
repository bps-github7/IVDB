import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Rating } from "src/app/models/contrib/rating.model";
import * as ratingActions from '../actions/rating.actions'
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { switchMap, map, exhaustMap } from "rxjs/operators";
import 'rxjs/add/observable/fromPromise';


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
			return Observable.fromPromise(ref.set(payload));
		}),
		map(() => ratingActions.createRatingSuccess())
	))



	update$ = createEffect(() => this.actions$.pipe(
		ofType(ratingActions.updateRating),
		map((action) => action),
		switchMap(rating => {
			const ref = this.afs.doc<Rating>(`ratings/${rating.id}`)
			return Observable.fromPromise(ref.update({id : rating.id,  ...rating.data}))
		}),
		map(() => ratingActions.updateRatingSuccess())
	))

	delete$ = createEffect(() => this.actions$.pipe(
		ofType(ratingActions.deleteRating),
		map(action => action),
		switchMap(action => {
			const ref = this.afs.doc<Rating>(`ratings/${action.id}`)
			return Observable.fromPromise(ref.delete())
		}),
		map(()=> ratingActions.deleteRatingSuccess())
	))
}