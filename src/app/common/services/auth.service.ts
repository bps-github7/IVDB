import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Observable, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './user.service';
import { AppUser } from 'src/app/models/app.user';
import { switchMap, first } from 'rxjs/operators';
import { FirebaseApp } from '@angular/fire';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
    user$: Observable<any>;
    userDetails;

    constructor(private afAuth : AngularFireAuth, private db: AngularFirestore,  private route: ActivatedRoute, private router: Router, private userService : UserService) {
        this.user$ = afAuth.authState.pipe(
            switchMap(user => {
                if (user) return this.db.doc<AppUser>(`users/${user.uid}`).valueChanges();
                else return of(null);
            })
        );
    }

    async google_login() {
        const provider = new firebase.auth.GoogleAuthProvider();
        const credential = await this.afAuth.signInWithPopup(provider);
        return this.updateUserData(credential.user);
    }

    async logout() {
        await this.afAuth.signOut();
        return this.router.navigate(['/']);
    }

    updateUserData(user) {
        const userRef: AngularFirestoreDocument<AppUser> = this.db.doc(`users/${user.uid}`);

        const data = {
            uid : user.uid,
            email : user.email,
            displayName : user.displayName
        }

        return userRef.set(data, {merge : true});
    }

    get_return_url() {
        let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
        localStorage.setItem('returnUrl', returnUrl);
    }

    // google_login() {
    //     this.get_return_url();
    //     this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    // }

    facebook_login() {
        this.get_return_url();
        alert('facebook login not working at this time.');
        //this.afAuth.signInWithRedirect(new firebase.auth.FacebookAuthProvider());
    }

    login(email : string, password : string) {
        this.get_return_url();
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((response) => {
            //need some debugging here. I hate these callback things hardly ever understand how they actually work... :/
            const user = firebase.auth().currentUser;
            this.updateUserData(user);
        })
        .catch((error) => {
            return {"error code" : error.code,
            "error message" : error.message};
        });

    }

    // logout() { this.afAuth.signOut(); }

    createFirebaseAccount(email : string, password : string, username : string) {
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
    

        //thing is... you arent supposed to get logged in after creating account
        this.login(username, password);
        //suposed to confirm your email, then log in manually..
    }

    get appUser$(): Observable<AppUser> {
        // uid is the property of the 'user' object -> the user represented by firebase as part of authentication and not the user object stored in the database
        // We need to get the firebase 'user' object to read the actual application 'user' object from the database
        return this.user$.pipe(
            switchMap(user => {
                if (user) { return this.userService.get$(user.uid); }
                else { return of(null); }
            })
        );
      }

}
