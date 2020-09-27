import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { User } from 'src/app/models/user';
import { Profile } from 'src/app/models/profile';
import { Observable } from 'rxjs';


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
            username : user.displayName,
            email : user.email,
            isAdmin: this.getPermissions(user),
            uid: user.uid
        }
        return userRef.set(data, {merge : true});
    }

    getPermissions(user : firebase.User) : boolean {
        //gets a specific attribute (the isAdmin field)
        //to check whether the logged in user is admin or not

        // getting an error about permissions being undefined
        // cant add initiailization without breaking this function.
        let permissions : any;
        let current_user = this.get(user.uid).valueChanges();
        //dont need this but try..
        current_user.subscribe((doc) => {permissions = doc})
        if (permissions.isAdmin) return true
    }

    get(uid : string): AngularFirestoreDocument<User>{
        return this.afs.doc(`users/${uid}`);
    }

    create(user : firebase.User) {
        // BY DEFAULT: everyone has base permissions unless provided otherwise.
        this.afs.collection('users').doc(user.uid).set({
            displayName : user.displayName,
            email : user.email,
            isAdmin : false,
            uid : user.uid
        });
    }

}
