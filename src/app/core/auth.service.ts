import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from 'src/app/models/user/user';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<firebase.User>
  user : firebase.User;
  private eventAuthError = new BehaviorSubject<string>("");
  public eventAuthError$ = this.eventAuthError.asObservable();

  constructor(
    private afAuth : AngularFireAuth, 
    private userService : UserService) {
    this.user$ = afAuth.authState;
    this.user$.subscribe((resp) => this.user = resp);
  }

  google_login() {
    this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider);

    this.user$ = this.afAuth.authState;
    this.user$.subscribe((resp) => this.user = resp);
  }

  facebook_login() {
    alert("facebook login not working at this time.")
  }

  login(email : string, password : string) {
    this.afAuth.signInWithEmailAndPassword(email, password);

    this.user$ = this.afAuth.authState;
		// you did this already in the constructor
		this.user$.subscribe((resp) => this.user = resp);

    this.userService.save(this.user);
  }

  logout() {
    this.afAuth.signOut();
		// think these are pointless lines.
    localStorage.removeItem("user_id");
    localStorage.removeItem("username");
  }

  createUser(email : string, password : string, name : string) {
    this.afAuth.createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      /* this is how we inject the display name the user provided into the auth state.
          ensuring that the user is associated with their own display name and what they provided to google.
          or another auth enabler- facebook, email etc. */  
      userCredential.user.updateProfile({
        displayName: name
        })
    }).catch(error => {
          console.log(error);
          this.eventAuthError.next(error);
    })

    this.user$ = this.afAuth.authState;
    this.user$.subscribe((resp) => this.user = resp);

    this.userService.save(this.user);
  }

  get appUser$(): Observable<User> {
    /* 
  appUser$ returns an observable of the current signed in user.
  
  It uses firebase auth state to check firestore user collection
  for a matching uid.  
      */
    return this.user$.pipe(
      switchMap((user) => { 
        if (user) {
          return this.userService.get(user.uid).valueChanges();
        }
        console.log("error: no user in db with this uid");
        return of(null);
      })
  );
}
}
