import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Observable, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './user.service';
import { AppUser } from 'src/app/models/app.user';
import { switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
    user$: Observable<firebase.User>;
        



    constructor(private afAuth : AngularFireAuth, private route: ActivatedRoute, private router: Router, private userService : UserService) {
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

    logout() { this.afAuth.signOut(); }

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
        this.router.navigate(['/create_profile'])
    }

    get appUser$(): Observable<AppUser> {
        // uid is the property of the 'user' object is the user represented by firebase as part of authentication and not the user object stored in the database
        // We need to get the firebase 'user' object to read and read the actual application 'user' object from the database
        return this.user$.pipe(
            switchMap(user => {
                if (user) { return this.userService.get(user.uid); }
                else { return of(null); }
            })
        );
      }

}
