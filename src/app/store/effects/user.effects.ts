import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from "@angular/core";
import { from, of } from "rxjs";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { User } from "src/app/models/user/user.model";
import * as userActions from '../actions/user.actions'
import { AngularFirestore } from "@angular/fire/firestore";
import { switchMap, map, delay } from "rxjs/operators";
import firebase from 'firebase/app'

@Injectable()
export class UserEffects {

	/* 
		PLEASE NOTE:
		USER effect chain deals with authentication. 
		avoid confusion with users effect chain
	*/
	constructor(
		private actions$ : Actions,
		// private afs: AngularFirestore,
		private afAuth : AngularFireAuth 
	) {}

	// fetch the auth status of the current user
	getUser$ = createEffect(() => this.actions$.pipe(
		ofType(userActions.getUser),
		switchMap(payload => this.afAuth.authState),
		delay(2000),
		map( authData => {
			if (authData) {
				const user = new User(authData.uid, authData.displayName);
				// TODO: fix- another bandaid solution, very insecure!
				localStorage.setItem("AUTHENTICATED",user.id)
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
			return userActions.notAuthenticated()
		})
	))







}