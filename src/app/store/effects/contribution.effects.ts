import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Contribution } from "../reducers/contribution.reducer";
import * as contributionActions from '../actions/contribution.actions'
import { AngularFirestore } from "@angular/fire/firestore";
import { switchMap, mergeMap, map } from "rxjs/operators";
import 'rxjs/add/observable/fromPromise';
import { of } from "rxjs";

@Injectable()
export class ContributionEffects {

	constructor(private actions$: Actions, private afs : AngularFirestore) {}

	query$ = createEffect(() =>this.actions$.pipe(
		ofType(contributionActions.QUERY),
		switchMap(action => {
			console.log(action);
			return this.afs.collection<Contribution>('contribution')
			.stateChanges()
		}),
		mergeMap(actions => actions),
		map(action => {
			return {
				type: `[Contribution] ${action.type}`,
				payload: {
					...action.payload.doc.data(),
					id: action.payload.doc.id
				}
			}
		})
	))
	
	
	update$ = createEffect(() => this.actions$.pipe(
		ofType(contributionActions.UPDATE),
		map((action: contributionActions.Update) => action),
		switchMap(data => {
			const ref = this.afs.doc<Contribution>(`contribution/${data.id}`)
			return Observable.fromPromise(ref.update(data.changes))
		}),
		map(() => new contributionActions.Success())
	))

	create$ = createEffect(() => this.actions$.pipe(
		ofType(contributionActions.ADDED),
		switchMap((action: contributionActions.Added) => of(action.payload)),
		map(payload =>  {
			const ref = this.afs.doc<Contribution>("contribution");
			return Observable.fromPromise(ref.set(payload))
		}),
		map(() => new contributionActions.Success())
	))

	delete$ = createEffect(() => this.actions$.pipe(
		ofType(contributionActions.REMOVED),
		map((action: contributionActions.Removed) => action),
		switchMap(id => {
			const ref = this.afs.doc<Contribution>(`contribution/${id}`)
			return Observable.fromPromise(ref.delete())
		}),
		map(()=> new contributionActions.Success())
	))
}