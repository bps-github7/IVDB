import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { User } from 'src/app/models/user';
import { Observable } from 'rxjs';
import { AngularFireObject } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class UserService {

    constructor(private db: AngularFirestore) { }

    update(user: firebase.User) {
        const userRef: AngularFirestoreDocument<User> = this.db.doc(`users/${user.uid}`);

        const data = {
            name : user.displayName,
            email : user.email,
            isAdmin: false,
            uid: user.uid
            //had to eliminate uid because of interface incongruency
        }

        return userRef.set(data, {merge : true});
    }

    get(uid : string): Observable<any>{
        return this.db.doc(`users/${uid}`).valueChanges();
    }

}
