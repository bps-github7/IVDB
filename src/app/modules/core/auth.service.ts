import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentChangeAction } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map, of } from "rxjs";
import { User } from "src/app/models/user";
import firebase from "firebase/app"
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";

@Injectable()
export class AuthService {
	user$ : Observable<firebase.User>	



	constructor(
		private afAuth : AngularFireAuth,
		// private afs : AngularFirestore,
		private route : ActivatedRoute
		) {
		this.user$ = this.afAuth.authState;
	 }
	
	emailAndPasswordLogIn(email : string, password : string) {
		this.afAuth.signInWithEmailAndPassword(email, password);
	}


	googleLogin() {
		let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
		localStorage.setItem('returnUrl', returnUrl)
		this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider);
	}


	logout() {
		this.afAuth.signOut();
	}

	signUpWithEmailAndPassword(email : string, password : string) {
		this.afAuth.createUserWithEmailAndPassword(email, password);
	}

	// TODO: read the docs, clarify how users make an account with google -
	// how do we know to make a user in user collection without a google sign up method?
	
	// signUpWithGoogle() {
	// 	this.afAuth.
	// }

}