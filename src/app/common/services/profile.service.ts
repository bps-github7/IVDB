import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Profile } from 'src/app/models/user_datamodel/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {


    //consider switching to user uid for profile document id. username is messy- could have spaces.
    //relys on user to give their username valid id, could limit what a valid username could contain.

    profileCollection : AngularFirestoreCollection<Profile>
    profileDocument : AngularFirestoreDocument<Profile>
    profiles : Observable<Profile []>
    profile : Observable<any>

    constructor(private afs : AngularFirestore) {
        this.profileCollection = this.afs.collection('profiles');
        this.profiles = this.profileCollection.valueChanges()

     }

    get$(displayName : string) : Observable<any> {
        return this.profileCollection.doc(displayName).valueChanges(); 
    }

    getAll$() {
        return this.profiles
    }

    exists(displayName : string) {
        return this.get$(displayName).subscribe(profile => {
            if (profile) return true;
        });
    } 

    create(profile) {
        // this.profileCollection.add(profile)
    }

    save(profile, displayName) {
        if (this.exists(displayName)) this.update(profile, displayName)
        else this.create(profile);
    }

    update(profile, displayName) {
    }
}
