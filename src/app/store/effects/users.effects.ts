import { Injectable } from "@angular/core";
import { from, of } from "rxjs";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { User } from "src/app/models/user/user.model";
import * as userActions from '../actions/users.actions'
import { switchMap, map, exhaustMap, catchError } from "rxjs/operators";
import {  }

@Injectable()
export class UsersEffects {

	/*
	TODO: error handling for CRUD actions with users.
	*/
	constructor(
		private actions$: Actions,
		private afs : AngularFirestore
		) { }

// returns an observable of all users in firestore/users 
	query$ = createEffect(() => this.actions$.pipe(
		ofType(userActions.readUsers),
		exhaustMap(() => this.afs.collection<User>('users').valueChanges().pipe(
				map((users) => userActions.readUsersSuccess({users}))
				)),
				catchError((err) => {
					// ... this prob not the right way to do this.
					userActions.readUserFailure({message: err})

					return of(err)
				})


	)
	)


	create$ = createEffect(() => this.actions$.pipe(
		ofType(userActions.createUser),
		switchMap(data => {
			const {type, ...payload} = data
			const ref = this.afs.doc<User>(`users/${data.id}`);
			return from(ref.set(payload));
		}),
		map(() => userActions.createUserSuccess())
	))

	update$ = createEffect(() => this.actions$.pipe(
		ofType(userActions.updateUser),
		map((action) => action),
		switchMap(user => {
			const ref = this.afs.doc<User>(`users/${user.id}`)
			return from(ref.update({id : user.id,  ...user.data}))
		}),
		map(() => userActions.updateUserSuccess())
	))

	delete$ = createEffect(() => this.actions$.pipe(
		ofType(userActions.deleteUser),
		map(action => action),
		switchMap(action => {
			const ref = this.afs.doc<User>(`users/${action.id}`)
			return from(ref.delete())
		}),
		map(()=> userActions.deleteUserSuccess())
	))
}