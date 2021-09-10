import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentChangeAction } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { User } from "src/app/models/user";
import firebase from "firebase/app"
import { ActivatedRoute } from "@angular/router";

import { State } from 'src/app/store/reducers/users.reducer';
import { select, Store } from '@ngrx/store';

import * as fromUsers from 'src/app/store/reducers/users.reducer'
import * as usersActions from 'src/app/store/actions/users.actions';
import { map } from 'rxjs';


@Injectable()
export class AuthService {
	user$ : Observable<firebase.User>	

	constructor(
		private afAuth : AngularFireAuth,
		private route : ActivatedRoute,
		private usersStore : Store<fromUsers.State>
		) {
		this.user$ = this.afAuth.authState;
	}
	
	emailAndPasswordLogIn(email : string, password : string) {
		this.afAuth.signInWithEmailAndPassword(email, password);
	}

	googleLogin() {
		let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
		localStorage.setItem('returnUrl', returnUrl)
		this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider)
		.then((userCredential) => {
			console.log("got this far");
			console.log(userCredential);
		}).catch((err) => console.error(err))
	}

	logout() {
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
		// this.user$.subscribe(user => {
		// })



	}

}