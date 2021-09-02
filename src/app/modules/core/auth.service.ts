import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import firebase from 'firebase/app';

@Injectable()
export class AuthService {
	
	constructor(private afAuth : AngularFireAuth) { }
	
	emailAndPasswordLogIn(email : string, password : string) {
		this.afAuth.signInWithEmailAndPassword(email, password);
	}

	googleLogin() {
		this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider);
	}


	logOut() {
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