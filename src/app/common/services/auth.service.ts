import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Injectable({
    //not sure what this is... does...
  providedIn: 'root'
})
export class AuthService {
    user$: Observable<firebase.User>;
        



    constructor(private afAuth : AngularFireAuth, private route: ActivatedRoute) {
        this.user$ = afAuth.authState
    }

    get_return_url() {
        let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
        localStorage.setItem('returnUrl', returnUrl);
    }

    google_login() {
        this.get_return_url();
        this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    }

    facebook_login() {
        this.get_return_url();
        alert('facebook login not working at this time.');
        //this.afAuth.signInWithRedirect(new firebase.auth.FacebookAuthProvider());
    }

    login(email : string, password : string) {
        this.get_return_url();
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

    createAccount(email : string, password : string, username : string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            return firebase.auth().currentUser.updateProfile({
            displayName: username
            })
        }).catch(function(error) {
            return {"error code" : error.code,
                "error message" : error.message};
            })
    }

}
