// angular core stuff + ngrx 
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

//firestore + rxjs
import { AngularFirestore  } from "@angular/fire/firestore";
import { switchMap, exhaustMap, map } from "rxjs/operators";
import { from } from "rxjs";

// our model and actions
import { Contribution } from "src/app/models/contrib/contribution.model";
import * as contribActions from '../actions/contributions.actions'

@Injectable()
export class ContributionEffects {

	constructor(private actions$: Actions, private afs : AngularFirestore) {}

	query$ = createEffect(() => this.actions$.pipe(
		ofType(contribActions.readContributions),
		exhaustMap(() => this.afs.collection<Contribution>('contributions').valueChanges().pipe(
			map((contributions) => contribActions.readContributionsSuccess({contributions}))
		))
	))

	create$ = createEffect(() => this.actions$.pipe(
		ofType(contribActions.createContribution),
		switchMap(data => {
			const {type, ...payload} = data
			const ref = this.afs.doc<Contribution>(`forums/${data.id}`);
			return from(ref.set(payload));
		}),
		map(() => contribActions.createContributionSuccess())
	))



	update$ = createEffect(() => this.actions$.pipe(
		ofType(contribActions.updateContribution),
		map((action) => action),
		switchMap(contrib => {
			const ref = this.afs.doc<Contribution>(`contributions/${contrib.id}`)
			return from(ref.update({id : contrib.id,  ...contrib.data}))
		}),
		map(() => contribActions.updateContributionSuccess())
	))

	delete$ = createEffect(() => this.actions$.pipe(
		ofType(contribActions.deleteContribution),
		map(action => action),
		switchMap(action => {
			const ref = this.afs.doc<Contribution>(`contributions/${action.id}`)
			return from(ref.delete())
		}),
		map(()=> contribActions.deleteContributionSuccess())
	))
}