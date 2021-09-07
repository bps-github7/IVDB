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
		return this.afs.collection('users').valueChanges()
	}

	displayNameTaken(name : string): Observable<boolean> {
		// displayNameTaken(name : string) : boolean {
		let docs = [];
		let unavailable = [];
		
		this.afs.collection('users')
		.snapshotChanges()
		.pipe(map((snapshot) => {
			snapshot.map((doc) => {
				docs.push(doc)
			})
		}))
		
		// TODO: is there a cleaner way to do this?
		docs.forEach((user : User) => {
			console.log(user)
			unavailable.push(user.displayName);
		})
		
		console.log("hi from authService")
		console.log(unavailable)
		// return unavailable.includes(name);
		return of(unavailable.includes(name)) 
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