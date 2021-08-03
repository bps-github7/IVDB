import { notAuthenticated } from './../actions/user.actions';
// import { googleLogin } from './../actions/user.actions';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { User } from "src/app/models/user/user.model";
import * as userActions from '../actions/user.actions'
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { switchMap, mergeMap, map, exhaustMap, delay } from "rxjs/operators";
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';

import firebase from 'firebase/app'
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class UserEffects {

	constructor(private actions$: Actions, private afAuth : AngularFireAuth, private afs : AngularFirestore) {}

	// fetch the auth status of the currebt user
	getUser$ = createEffect(() => this.actions$.pipe(
		ofType(userActions.getUser),
		switchMap(payload => this.afAuth.authState),
		delay(2000),
		map( authData => {
			if (authData) {
				const user = new User(authData.uid, authData.displayName);
				return userActions.authenticated(user);
			} else {
				// todo : when u get the reducer working, this action should take no arguments.
				return userActions.notAuthenticated(new User('12345', 'GUEST'))
			}
		}),
		// catchError((err) =>{
		// 	return Observable.of({
		// 		type : userActons.authError({err}),
		// 		payload : { err }
		// 	})
		// }
		// )
	));


	googleLogin$ = createEffect(() => this.actions$.pipe(
		ofType(userActions.googleLogin),
		switchMap(payload => {
			console.log("switch mapity map map yall at the effect level")	
			return Observable.fromPromise( this.googleLogin() )
		}),
		map( credential => {
			// should just be a blank ()
			return userActions.getUser({});
		} ),
		// catch( (err) => {
		// 	return Observable.of(user.action.authError({error : err.message}))
		// })
	))

	// helper method
	private googleLogin() : Promise<any> {
		return this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider);
	}


	logout$ = createEffect(() => this.actions$.pipe(
		ofType(userActions.logout),
		map((action) => action.payload),
		switchMap(payload => {
			return Observable.of( this.afAuth.signOut() );
		}),
		map( authData => {
			// return userActions.notAuthenticated({})
			return userActions.notAuthenticated(new User('12345','GUEST'))
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
			return Observable.fromPromise(ref.set(payload));
		}),
		map(() => userActions.createUserSuccess())
	))

	update$ = createEffect(() => this.actions$.pipe(
		ofType(userActions.updateUser),
		map((action) => action),
		switchMap(user => {
			const ref = this.afs.doc<User>(`users/${user.id}`)
			return Observable.fromPromise(ref.update({id : user.id,  ...user.data}))
		}),
		map(() => userActions.updateUserSuccess())
	))

	delete$ = createEffect(() => this.actions$.pipe(
		ofType(userActions.deleteUser),
		map(action => action),
		switchMap(action => {
			const ref = this.afs.doc<User>(`users/${action.id}`)
			return Observable.fromPromise(ref.delete())
		}),
		map(()=> userActions.deleteUserSuccess())
	))
}