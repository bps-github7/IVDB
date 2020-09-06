import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { AppUser } from '../../models/app.user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    usersCollection : AngularFirestoreCollection<AppUser>;
    userDocument : AngularFirestoreDocument<AppUser>;
    //doubt this will be nessc..
    Users : Observable<AppUser[]>;


    constructor(private db: AngularFirestore,) {
        this.usersCollection = this.db.collection('users');
        this.Users = this.usersCollection.valueChanges();
     }

    update(user: firebase.User) {
        this.db.doc('users/' + user.uid).update({
            name : user.displayName,
            email : user.email
        });
    }

    get$(uid : string): Observable<AppUser> {
        return this.db.doc('/users/' + uid).valueChanges();
    }
}
