import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { switchMap, exhaustMap, map } from "rxjs/operators";
import { ContributionService } from "src/app/services/persistence/contribution.service"
import * as contribActions from '../actions/contributions.actions'

@Injectable()
export class ContributionEffects {

	constructor(private actions$: Actions, private afs : ContributionService) {}

	query$ = createEffect(() => this.actions$.pipe(
		ofType(contribActions.readContributions),
		exhaustMap(() => this.afs.getAll().pipe(
			map((contributions) => contribActions.readContributionsSuccess({contributions}))
		))
	))

	create$ = createEffect(() => this.actions$.pipe(
		ofType(contribActions.createContribution),
		map(data => {
			const {type, ...contrib} = data
			this.afs.create(contrib)
		}),
		map(() => contribActions.createContributionSuccess())
	))



	update$ = createEffect(() => this.actions$.pipe(
		ofType(contribActions.updateContribution),
		map((action) => action),
		map(contrib => {
			this.afs.update(contrib)
		}),
		map(() => contribActions.updateContributionSuccess())
	))

	delete$ = createEffect(() => this.actions$.pipe(
		ofType(contribActions.deleteContribution),
		map(action => action),
		map(contrib => {
			this.afs.delete(contrib.id)
		}),
		map(()=> contribActions.deleteContributionSuccess())
	))
}