import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Profile } from 'src/app/models/profile';

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

    get$(displayName : string) : Observable<any> {
        this.profile = this.profileCollection.doc('BenSehnert').valueChanges(); 
        return this.profile
    }

    getAll$() {
        return this.profiles
    }

    exists(displayName : string) {
        return this.get$(displayName).subscribe(profile => {
            if (profile) return true;
        });
    } 

    update(profile, displayName) {
        //techincally, the code is the same whether we are updating or creating new file
        //could be mistaken/ and this is future problem area, but for now this seems right
        this.profileCollection.doc(displayName).set(profile)

        // if (this.exists(displayName)) {
        //     this.profileCollection.doc(displayName).set(profile)
        // }
        // else this.create(profile, displayName)
        
    }


    // create(profile : Profile, displayName : string) {
    //     this.profileCollection.a
    // }
}
