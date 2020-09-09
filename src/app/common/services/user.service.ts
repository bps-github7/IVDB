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

        //need to read the database, if user.isAdmin is false or null, set permission to false, else true.
        const permission = true
        

        const data = {
            name : user.displayName,
            email : user.email,
            isAdmin: this.getPermissions(user),
            uid: user.uid
        }

        return userRef.set(data, {merge : true});
    }

    getPermissions(user : firebase.User) : boolean {
        //gets a specific attribute (the isAdmin field)
        //to check whether the logged in user is admin or not
        let permissions;
        let current_user = this.get(user.uid).valueChanges();
        current_user.subscribe(doc => permissions = doc)
        if (permissions.isAdmin) return true
    }

    //not ideal.. doesnt return an observable cause it will mess with the compilation.
    get(uid : string): AngularFirestoreDocument<User>{
        return this.afs.doc(`users/${uid}`);
    }

    create(user : firebase.User) {
        //this works but not ideal, by default sets every new user
        //to isAdmin = false. technically this is what would happen - admin users need to be verified/given permission by existing admins
        // the fatal flaw is that an admin who recreates their account would lose their access... 
        this.afs.collection('users').doc(user.uid).set({
            displayName : user.displayName,
            email : user.email,
            isAdmin : false,
            uid : user.uid
        });
    }

}
