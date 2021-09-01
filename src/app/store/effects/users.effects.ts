import { Injectable } from "@angular/core";
import { from } from "rxjs";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { User } from "src/app/models/user/user.model";
import * as userActions from '../actions/users.actions'
import { AngularFirestore } from "@angular/fire/firestore";
import { switchMap, map, exhaustMap } from "rxjs/operators";

@Injectable()
export class UsersEffects {

	/*
		PLEASE NOTE:
		USERS effect chain deals with C.R.U.D of all site users
		avoid confusion with USER effect chain.
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
		))
	))


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