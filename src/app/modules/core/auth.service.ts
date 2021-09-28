import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentChangeAction } from "@angular/fire/firestore";
import { first, Observable, of } from "rxjs";
import { User } from "src/app/models/user";
import firebase from "firebase/app"
import { ActivatedRoute } from "@angular/router";

import { State } from 'src/app/store/reducers/users.reducer';
import { select, Store } from '@ngrx/store';

import * as fromUsers from 'src/app/store/reducers/users.reducer'
import * as usersActions from 'src/app/store/actions/users.actions';
import { selectUserById } from 'src/app/store/selectors/users.selector';
import { map, firstValueFrom } from 'rxjs';


@Injectable()
export class AuthService {
	user$ : Observable<firebase.User>	
	user : User;


	constructor(
		private afAuth : AngularFireAuth,
		private route : ActivatedRoute,
		private usersStore : Store<fromUsers.State>
		) {
		this.user$ = this.afAuth.authState;
		this.usersStore.select(fromUsers.selectAll)
		this.usersStore.dispatch( usersActions.readUsers() )
	}

	getUser$(): any {
		return this.afAuth.authState.pipe(first());
	}


	async getUserEntity$() {
		const user : firebase.User = await firstValueFrom(this.getUser$())
		// console.log("got this in async fn",user.uid)		
		return this.usersStore.pipe(select(selectUserById(user.uid)))
	}


	
	emailAndPasswordLogIn(email : string, password : string) {
		this.afAuth.signInWithEmailAndPassword(email, password);
	}

	googleLogin() {
		let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
		localStorage.setItem('returnUrl', returnUrl)
		this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider)
		.then((result) => {
			let credentials = result.user
			// TODO: you could probably live without this- profile and preferences can use a selector to check if user has these, others are unnessecary
			let defaultMetadata = {
				provider : 'google',
				firstLogin : true,
				hasProfile : false,
				hasPreferences: false
			}
			let newGoogleUser = {
				id : credentials.uid,
				displayName : credentials.displayName,
				email : credentials.email,
				// cant be here for good...
				metadata: defaultMetadata
			}
			this.usersStore.pipe(select(selectUserById(newGoogleUser.id)))
			.subscribe(user => {
				// TODO: if the document is deleted from collection, ngrx needs to know and update store/entity!!! not happening here!
				if (!user) {
					this.usersStore.dispatch(usersActions.createUser(newGoogleUser))
				}
				// then we need to do something to tell the caller - sign in component, what to do next...
			})
		})
		.catch(err => console.error(err))
		// if (this.afAuth.authState)
	}

	logOut() {
		this.afAuth.signOut();
	}

	signUpWithEmailAndPassword(email : string, password : string, displayName : string) {
		this.afAuth.createUserWithEmailAndPassword(email, password)
		.then((userCredential) => {
			let user = {
				id : userCredential.user.uid,
				displayName,
				email,
				metadata : {
					provider : 'email',
					firstLogin : true,
					hasProfile : false,
					hasPreferences : false
				} 

			}

			console.log("new user:");
			console.log(user);
			this.usersStore.dispatch( usersActions.createUser(user))
		}).catch((err) => {
			console.error(err);
		})
	}

}