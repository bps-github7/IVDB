import { Injectable } from "@angular/core";
import { from, of } from "rxjs";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as userActions from '../actions/users.actions'
import { switchMap, map, exhaustMap, catchError } from "rxjs/operators";
import { UsersService } from "src/app/services/persistence/users.service";

@Injectable()
export class UsersEffects {

	constructor(private actions$: Actions, private afs : UsersService) { }

	query$ = createEffect(() => this.actions$.pipe(
		ofType(userActions.readUsers),
		exhaustMap(() => this.afs.getAll().pipe(
				map((users) => userActions.readUsersSuccess({users}))
				)),
				catchError((err) => {
					userActions.readUserFailure({message: err})
					return of(err)
				})
		)
	)

	create$ = createEffect(() => this.actions$.pipe(
		ofType(userActions.createUser),
		map(data => {
			const {type, ...user} = data
			this.afs.create(user)
		}),
		map(() => userActions.createUserSuccess())
	))

	update$ = createEffect(() => this.actions$.pipe(
		ofType(userActions.updateUser),
		map((action) => action),
		map(user => {
			this.afs.update(user)
		}),
		map(() => userActions.updateUserSuccess())
	))

	delete$ = createEffect(() => this.actions$.pipe(
		ofType(userActions.deleteUser),
		map(action => action),
		map(user => {
			this.afs.delete(user.id)
		}),
		map(()=> userActions.deleteUserSuccess())
	))
}