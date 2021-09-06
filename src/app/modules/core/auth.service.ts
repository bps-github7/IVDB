import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentChangeAction } from "@angular/fire/firestore";
import firebase from 'firebase/app';
import { Observable } from "rxjs";
import { map, of } from "rxjs";
import { User } from "src/app/models/user";

@Injectable()
export class AuthService {
	
	constructor(private afAuth : AngularFireAuth, private afs : AngularFirestore) { }
	
	emailAndPasswordLogIn(email : string, password : string) {
		this.afAuth.signInWithEmailAndPassword(email, password);
	}

	getUsers$ () : Observable<any> {
		return this.afs.collection('users').snapshotChanges()
	}

	// displayNameTaken(name : string) {
	// 	let docs = [];
	// 	let unavailable = [];
		
	// 	this.afs.collection('users')
	// 	.snapshotChanges()
	
	// 	return of(unavailable); 
	// }

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