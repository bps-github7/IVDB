import { updateUser } from './../../store/actions/users.actions';
import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { first, Observable, of } from "rxjs";
import { User } from "src/app/models/user";
import firebase from "firebase/app"
import { ActivatedRoute } from "@angular/router";

import { select, Store } from '@ngrx/store';

import * as fromUsers from 'src/app/store/reducers/users.reducer'
import * as usersActions from 'src/app/store/actions/users.actions';
import { selectUserById } from 'src/app/store/selectors/users.selector';
import { firstValueFrom } from 'rxjs';


@Injectable()
export class AuthService {
	user$ : Observable<firebase.User>	
	user : User;


	constructor(
		private afAuth : AngularFireAuth,
		private route : ActivatedRoute,
		private usersStore : Store<fromUsers.State>
		) {

		// TODO: when done your refactoring of authService, you should check
		// that the below calls, above properties and injections are needed
		this.user$ = this.afAuth.authState;
		this.usersStore.select(fromUsers.selectAll)
		this.usersStore.dispatch( usersActions.readUsers() )
	}

	getUser$(): Observable<firebase.User> {
		/**
		 * provides an observable of the authentication state
		 * which gives us current user crentials via firebase
		 * among other things- { uid, displayName, email } 
		 */
		return this.afAuth.authState.pipe(first());
	}



	async getUserEntity$(): Promise<Observable<User>> {
		/**
		 * provides the current user's info from perspective of the application
		 * 
		 * depends on getUser$ method for obtaining current authenticated user uid
		 * that is associated with a user in users collection and store
		 * 
		 * because of that, without a logged in user, this would return undefined. 
		 * 
		 */

		const user : firebase.User = await firstValueFrom(this.getUser$())
		return this.usersStore.pipe(select(selectUserById(user.uid)))
	}

	/* TODO: idea for helper method- cut some crap out of google login-
		if the 
	*/
	private saveUser (userCredentials : firebase.User) {
		/**
		 * helper method that queries the store and updates a user
		 * with new data if the document exists, and creates one if not
		 * 
		 * @param {firebase.User} userCredentials : object pulled
		 * from promise returned from firebase authentication method-
		 * the data associated with user we are trying to save to user collection.
		 */
		return new Promise((resolve, reject) => {
			this.usersStore.pipe(select(selectUserById(userCredentials.uid)))
			.subscribe((user : User) => {
			 // TODO: if the document is deleted from collection, ngrx needs to know and update store/entity!!! not happening here!
				if (!user) {
					this.usersStore.dispatch(usersActions.createUser({
					id : userCredentials.uid,
					displayName : userCredentials.displayName,
					email : userCredentials.email,
					}))
				} else {
					this.usersStore.dispatch(usersActions.updateUser({
						id : userCredentials.uid, 
						data : {
							displayName : userCredentials.displayName,
							email: userCredentials.email
							} 
					}))
				}		
				resolve(true)
			},
			// TODO: wanted error catch here but this call signiture is deprecated .subscribe(Res=> do subscriber error, err => handle error)
			)
			
		})
	}

	
	emailAndPasswordLogIn(email : string, password : string) {
		/**
		 * allows returning user to sign into an already existing IVDB user account
		 * 
		 * NOTE: there is no error checking here, the
		 * responsiblity falls on component that calls this method
		 * 
		 * @param {string} email - the email associated with an existing account.
		 * @param {string} password - the password associated with an existing account.
		 * 
		 */

		this.afAuth.signInWithEmailAndPassword(email, password)
		.then((userCredentials) => {
			console.log("sign in successful")
			console.log(userCredentials)
			return true;
		}).catch((err) => {
			console.error("Auth Service: Error while logging in with Email and password");
			console.error(err);
		})
	}


	googleLogin() {
		/**
		 * using pop up, signs in a user with their google account
		 * 
		 * if there is no user associated with the credentials returned from the
		 * sign in process, creates an associated document in users collection.
		 * otherwise, update the associated user document with the users current
		 * displayName from google
		 *   
		 * @returns todo- finish this, would prob be ideal to return a promise and let
		 * the invoking component decide where to go based on resolve or reject.
		 */

		let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
		localStorage.setItem('returnUrl', returnUrl)
		this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider)
		.then((result) => {
			if (result) {
				console.log("Hi the google login was successful sawn")
			}
			
			let credentials = result.user
	
			this.saveUser(credentials)
			/* 		
				TODO: create option in preferences to use own displayName,
				in the case this option is selected, we should not update
				the user displayname with the current google displayName
			*/
				
		})

				// TODO: we need to do something to tell the caller - sign in component, what to do next...

	}


	signUpWithEmailAndPassword(email : string, password : string, displayName : string) {
		/**
		 * signs a user up for IVDB, by creating both auth credential with firebase 
		 * and an associated document in users collection. 
		 * 
		 * @param {string} email - the email used in sign up process
		 * @param {string} password - the password used in sign up process
		 * @param {string} displayName - the display name provided in sign up
		 * 
		 * afAuth method for user creation requires the first two params, but we request
		 * a username/ display name so that user can be immediately associated with a displayName 
		 * when we create an entity and document in user collection
		 * 
		 * @returns todo- finish this, would prob be ideal to return a promise and let
		 * the invoking component decide where to go based on resolve or reject.
		 *  */ 
			
		this.afAuth.createUserWithEmailAndPassword(email, password)
		.then((userCredential) => {
			let user = {
				id : userCredential.user.uid,
				displayName,
				email,
			}
			this.usersStore.dispatch( usersActions.createUser(user))
		}).catch((err) => {
			console.error(`Authentication Error: failed to create user / complete sign up process- ${err}`);
		})
	}


	logOut() {
		this.afAuth.signOut();
	}


}