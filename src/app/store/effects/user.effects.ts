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
import 'rxjs/add/operator/of';
import 'rxjs/add/operator/catch';


import { AngularFireAuth } from "@angular/fire/auth";

import * as firebase from 'firebase'l


@Injectable()
export class UserEffects {

	constructor(private actions$: Actions, private afAuth : AngularFireAuth, private afs : AngularFirestore) {}


	getUser$ = createEffect(() => this.actions$.pipe(
		ofType(userActions.getUser),
		switchMap(payload => this.afAuth.authState),
		delay(2000),
		map( authData => {
			if (authData) {
				const user = new User(authData.uid, authData.displayName);
				return userActions.authenticated(user);
			} else {
				return userActions.notAuthenticated(new User('12345', 'GUEST'))
				// this is what should get run, if our reducer worked...
				// return userActions.notAuthenticated();
			}
		}),
		// need to lookinto how error handling in ngrx effects
		// catch((err) => Observable.of(userActons.authError({err})))
	));


	googleLogin$ = createEffect(() => this.actions$.pipe(
		ofType(userActions.googleLogin),
		switchMap(oayload => {
			return Observable.fromPromise( this.googleLogin() )
		}),
		map( credential => {
			// should just be a blank ()
			return userActions.getUser({});
		} ),
		// catch( err => {
			// return Observable.of(user.action.authError({error : err.message}))
		// })
	))


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




	// helper method
	private googleLogin() {
		const provider = new firebase.auth
	// }




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