import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { User } from '../../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    usersCollection : AngularFirestoreCollection<User>;
    userDocument : AngularFirestoreDocument<User>;
    //doubt this will be nessc..
    Users : Observable<User[]>;


    constructor(private db: AngularFirestore) {
        this.usersCollection = this.db.collection('users');
        this.Users = this.usersCollection.valueChanges();
     }

    update(user: firebase.User) {
        this.db.doc('users/' + user.uid).update({
            name : user.displayName,
            email : user.email
        });
    }

    // create(user : firebase.User) {
    //     this.db.collection('users').add({email : user.email, name : user.displayName});
    // }

    

    async create(uid: string, data: User) {
        //trying something new. this was copied from auth.service

        // const userRef: AngularFirestoreDocument<User> = this.db.doc(`users/${data.uid}`);

        // return userRef.set(data, {merge : true});
        await this.db.collection('users').doc(uid).set(data);
    }

    get$(uid : string) {
        return this.db.doc('users/' + uid).valueChanges();
    }
}
