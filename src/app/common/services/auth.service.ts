import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';


@Injectable({
    //not sure what this is... does...
  providedIn: 'root'
})
export class AuthService {
    user$: Observable<firebase.User>;
        



    constructor(private afAuth : AngularFireAuth) {
        this.user$ = afAuth.authState
    }

    google_login() {
        this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    }

    facebook_login() {
        alert('facebook login not working at this time.');
        //this.afAuth.signInWithRedirect(new firebase.auth.FacebookAuthProvider());
    }

    login(email : string, password : string) {
        // //note- not a legitimate/ secure login. needs backend to work correctly

        // //let isValid = AuthService.login(this.form.value);
        // //if (!isValid) this.form.setErrors({ invalidLogin : true });

        // //logging in should change views on the site- sign in -> signout, profile becomes available, comments are authored by
        // if (this.username.value === 'guest' && this.password.value === '12345') return { login : true }; 
        // this.form.setErrors({ invalidLogin : true });
        
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((response) => {
            const user = firebase.auth().currentUser;
            // user.updateProfile({displayName: email})
        })
        .catch((error) => {
            return {"error code" : error.code,
            "error message" : error.message};
        });

    }

    logout() {
        this.afAuth.signOut()
    }

}
