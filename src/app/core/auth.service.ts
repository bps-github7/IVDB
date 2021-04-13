import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from 'src/app/models/user/user';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { FirebaseApp } from '@angular/fire';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    user$: Observable<firebase.User>
    user : firebase.User;
    private eventAuthError = new BehaviorSubject<string>("");
    public eventAuthError$ = this.eventAuthError.asObservable();

    constructor(private afAuth : AngularFireAuth, private userService : UserService) {
      this.user$ = afAuth.authState;
      this.user$.subscribe((resp) => this.user = resp)
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
       localStorage.removeItem("user_id");
       localStorage.removeItem("username");
    }

    createUser(email : string, password : string, name : string) {
        this.afAuth.createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            userCredential.user.updateProfile({
                displayName: name
            }
            )
        }).catch(error => {
            console.log(error);
            this.eventAuthError.next(error);
        }

        )
    }

    get appUser$(): Observable<any> {
        // uid is the property of the 'user' object -> the user represented by firebase as part of authentication and not the user object stored in the database
        // We need to get the firebase 'user' object to read the actual application 'user' object from the database
        return this.user$.pipe(
            switchMap((user) => { 
                if (user) { 
                    return this.userService.get(user.uid).valueChanges();
                }
                return of(null);
        }));
    }
}
