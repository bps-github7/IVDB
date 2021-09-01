import { Injectable } from "@angular/core";
import { from, of } from "rxjs";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { User } from "src/app/models/user/user.model";
import * as userActions from '../actions/user.actions'
import { AngularFirestore } from "@angular/fire/firestore";
import { switchMap, map, exhaustMap, delay } from "rxjs/operators";

import firebase from 'firebase/app'
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class UserEffects {

	constructor(
		private actions$: Actions,
		private afAuth : AngularFireAuth,
		private afs : AngularFirestore
		) { }

	// fetch the auth status of the current user
	getUser$ = createEffect(() => this.actions$.pipe(
		ofType(userActions.getUser),
		switchMap(payload => this.afAuth.authState),
		delay(2000),
		map( authData => {
			if (authData) {
				const user = new User(authData.uid, authData.displayName);
				return userActions.authenticated({payload : user});
			} else {
				return userActions.notAuthenticated()
			}
		}),
		// catchError((err) =>{
		// 	return of({	type : userActions.authError({err}), payload : { err }	})
		// })
	));


	googleLogin$ = createEffect(() => this.actions$.pipe(
		ofType(userActions.googleLogin),
		switchMap(payload => {
			// return an observable from the promise returned by GoogleLogin helper fn.
			return from(this.googleLogin())
		}),
		map( credential => {
			console.log(credential)
			return userActions.getUser();
		} ),
		// catchError( (err) => {
		// 	return of(user.action.authError({error : err.message}))
		// })
	))

	// helper method
	private googleLogin() : Promise<any> {
		return this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider);
	}


	logout$ = createEffect(() => this.actions$.pipe(
		ofType(userActions.logout),
		// map((action) => action.payload),
		map((action) => action),
		switchMap(payload => {
			//return observable of auth signout event
			return of( this.afAuth.signOut() );
		}),
		map( authData => {
			// return 
			return userActions.notAuthenticated()
		})
	))






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