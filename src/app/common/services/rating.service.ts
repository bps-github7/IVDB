import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { User } from 'src/app/models/user';
import { Game } from 'src/app/models/game';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class RatingService {

    userCollection : AngularFirestoreCollection<User[]>
    userDoc: AngularFirestoreDocument<User>;
    // gameDoc: AngularFirestoreDocument<Game>;
    user: Observable<User>;
    // game: Observable<Game>;
    
    constructor(private db: AngularFirestore, private auth: AuthService) { 
        this.userDoc = this.db.doc('user/J4h6JejwiHZLV3UgbaNdoREwiMs2');
        this.user = this.userDoc.valueChanges();
        // this.db.doc('user/'+ this.auth.uid)
    }

    give_me_user() {
        return this.user;
    }
}
