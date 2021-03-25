import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Profile } from 'src/app/models/user/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

    profileCollection : AngularFirestoreCollection<Profile>
    profileDocument : AngularFirestoreDocument<Profile>
    profiles : Observable<Profile []>
    profile : Observable<any>

    constructor(private afs : AngularFirestore) {
        
        this.profileCollection = this.afs.collection('profiles');
        this.profiles = this.profileCollection.valueChanges()

     }

    get$(uid : string) : Observable<any> {
        return this.profileCollection.doc(uid).valueChanges(); 
    }

    getAll$() {
        return this.profiles
    }

    exists(uid : string) {
        let exists = false;
        this.get$(uid).subscribe(profile => {
            if (profile) {
                console.log("document exists!");
                exists = true;
            } 
        });
        return exists
    } 
    /* I'm renaming this to save- will create the doc if none exists, overwrite otherwise.
    So there is no point to writing seperate method for updating */
    save(profile, uid) {
        this.profileCollection.doc(uid).set({
            nickname : profile.nickname,
            profileImg : profile.profileImg,
            backgroundImg : profile.backgroundImg,
            bio : profile.bio,
            gamerTags : profile.gamerTags,
            links : profile.links},
        {merge : true})
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((err) => {
            console.log("error writting to document: " + err);
        })
    }
}
