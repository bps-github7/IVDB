import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Preferences } from 'src/app/models/user/preferences';

@Injectable({
  providedIn: 'root'
})
export class PreferencesService {

    

    constructor(private afs : AngularFirestore) {

    }


    // should type the return type to Observable<Preferences> when possible`
    get$(uid : string) {
        return this.afs.doc(`preferences/${uid}`).valueChanges(); 
    }

// getAll$() {
//     return this.profiles
// }

exists(uid : string) {
    return this.get$(uid).subscribe(preferences => {
        if (preferences) return true;
    });
} 

create(profile, uid) {
    this.afs.doc(`preferences/${uid}`).set({
        nickname : profile.nickname,
        profileImg : profile.profileImg,
        backgroundImg : profile.backgroundImg,
        bio : profile.bio,
        gamerTags : profile.gamerTags,
        links : profile.links}, {merge : true})
}
}
