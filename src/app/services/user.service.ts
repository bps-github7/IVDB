import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { User } from 'src/app/models/user/user';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class UserService {    
  permissions : boolean;
  user : User ;

  constructor(private afs: AngularFirestore) { }

  save(user : firebase.User) {
      
    this.afs.firestore.doc(`users/${user.uid}`).get()
    .then(doc => {
        if (doc.exists) {
            this.update(user)
        }
        else { this.create(user) }
    })
  }



  update(user: firebase.User) {
    
    /* TODO: figure out why the bug this conditional resolves is occuring? */
    

    // does not work
    // this.get(user.uid).valueChanges().subscribe(response => this.user = response);
    // console.log("fetched this from db: ",this.user);



    console.log(`the user id is : ${user.uid}`);
    if (!user) {
      console.log("Cannot update user that does not exist!");
      return;
    }
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`); 
    
    // need to  
    
    userRef.valueChanges().subscribe(doc => {
    // only assign this if the auth State is logged in and finished its change
      this.user = doc;
    })
    console.log("now outside the observable:")
    console.log(this.user);

    // if (user) {
    //   const data = {
    //     displayName : this.user.username,
    //     // if username comes from google/facebook or contains spaces, we need to strip these out
    //     username : (this.user.username.includes(' ') ? this.user.username.split(' ').join('') : this.user.username),
    //     email : user.email,
    //     isAdmin: this.getPermissions(user),
    //     uid: user.uid
    //   }
    // } else {

    //   }
    // console.log("feteched this from the db: " + this.user);
    const data = {
      displayName : this.user.username,
      // if username comes from google/facebook or contains spaces, we need to strip these out
      username : (this.user.username.includes(' ') ? this.user.username.split(' ').join('') : this.user.username),
      email : user.email,
      isAdmin: this.getPermissions(user),
      uid: user.uid
    }      
    return userRef.set(data, {merge : true});
  }

  getPermissions(user : firebase.User) : boolean {
      //gets a specific attribute (the isAdmin field)
      //to check whether the logged in user is admin or not
      this.get(user.uid).valueChanges().pipe(
          map(appUser => this.permissions = appUser.isAdmin));
      // if (this.permissions) return true
      return this.permissions ? false : true;
  }

  get(uid : string, profile : string = ""): AngularFirestoreDocument<User>{
      return this.afs.doc(`users/${uid}`);
      // if (profile = "") { return this.afs.doc(`users/${uid}`); }
      // else return this.afs.doc(`users/${uid}/profile`)
  }

  create({displayName, email, uid}) {
    this.afs.collection('users').doc(uid).set({
        username : displayName,
        email : email,
        isAdmin : false,
        uid : uid
    });
}
}
