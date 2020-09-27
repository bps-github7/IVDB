import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Profile } from 'src/app/models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

    constructor(private afs : AngularFirestore) { }

    get$(displayName : string) {
        return this.afs.doc(`profiles/${displayName}`).valueChanges();
    }

    update(profile) {

    }


    create(
        //user : firebase.User, 
        //displayName : string,
        profile : Profile) {
        // BY DEFAULT: everyone has base permissions unless provided otherwise.
        // this.afs.collection('profiles').doc(`${displayName}_${user.uid}`).set({
            // nickname = profile.nickname;
            //should all be optional except account settings stuff... 
        // });
    }
}
