import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './user.service';
import { User } from 'src/app/models/user';
import { switchMap, first } from 'rxjs/operators';
import { FirebaseApp } from '@angular/fire';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
    user$: Observable<any>;
    newUser: any;
    private eventAuthErr = new BehaviorSubject<string>("");
    eventAuthError$ = this.eventAuthErr.asObservable();


    //need to design this carefully to manage dependencies correctly.. as of now, not a great implementation.
    constructor(private afAuth : AngularFireAuth, private db: AngularFirestore,  private route: ActivatedRoute, private router: Router, private userService : UserService) {
        this.user$ = afAuth.authState.pipe(
            switchMap(user => {
                if (user) return this.db.doc<User>(`users/${user.uid}`).valueChanges();
                else return of(null);
            })
        );
    }

    async google_login() {
        const provider = new firebase.auth.GoogleAuthProvider();
        const credential = await this.afAuth.signInWithPopup(provider);
        return this.updateUserData(credential.user);
    }

    async login(email : string, password : string) {
        this.get_return_url();
        await firebase.auth().signInWithEmailAndPassword(email, password)
        .then((response) => {
            const user = firebase.auth().currentUser;
            this.updateUserData(user);
        })
        .catch((error) => {
            return {"error code" : error.code,
            "error message" : error.message};
        });

    }

    createUser(user) {
        this.afAuth.createUserWithEmailAndPassword(user.email, user.password)
        .then(userCredential => {
            this.newUser = user;
            userCredential.user.updateProfile({
                displayName : user.displayName
            })
            this.updateUserData(this.newUser.uid).then(() => {
                // this.router.navigate(['/create_profile'])
            })
        
        }).catch(error => {
            console.log(error);
            this.eventAuthErr.next(error);
        }

        )
        
        
        
    }

    insertUserData(uid : string) {
        
        return this.db.doc(`users/${uid}`).set({
            email: this.newUser.email,
            displayName: this.newUser.displayName,
            isAdmin: false,
            uid: this.newUser.uid})
        }

    async logout() {
        await this.afAuth.signOut();
        return this.router.navigate(['/']);
    }

    updateUserData(user) {
        const userRef: AngularFirestoreDocument<User> = this.db.doc(`users/${user.uid}`);

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

    
    get AppUser$(): Observable<User> {
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
