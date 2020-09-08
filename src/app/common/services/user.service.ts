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

    constructor(private afs: AngularFirestore) { }

    save(user : firebase.User) {
        this.afs.firestore.doc(`users/${user.uid}`).get()
            .then(doc => {
                if(doc.exists) { this.update(user) }
                else this.create(user)
            })
    }

    update(user: firebase.User) {
        const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

        const data = {
            name : user.displayName,
            email : user.email,
            isAdmin: false,
            uid: user.uid
        }

        return userRef.set(data, {merge : true});
    }

    get(uid : string): Observable<any>{
        return this.afs.doc(`users/${uid}`).valueChanges();
    }

    create(user : firebase.User) {
        this.afs.collection('users').doc(user.uid).set({
            displayName : user.displayName,
            email : user.email,
            isAdmin : false,
            uid : user.uid
        });
    }

}
