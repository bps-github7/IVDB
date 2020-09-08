import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    user$: Observable<firebase.User>

    constructor(private afAuth : AngularFireAuth) {
      this.user$ = afAuth.authState;
    }

    google_login() {
       this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider);
    }

    facebook_login() {
       alert("facebook login not working at this time.")
    }

    login(email : string, password : string) {
        this.afAuth.signInWithEmailAndPassword(email, password);
    }

    logout() {
       this.afAuth.signOut();
    }

    createUser(email : string, password : string, name : string) {
        this.afAuth.createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            userCredential.user.updateProfile({
                displayName: name
            })
        })
    }
}
