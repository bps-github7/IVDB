import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { User } from 'src/app/models/user/user';
import { Game } from 'src/app/models/content/game';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class RatingService {

    userCollection : AngularFirestoreCollection<User[]>
    userDoc: AngularFirestoreDocument<User>;
    gameDoc: AngularFirestoreDocument<Game>;
    user: Observable<User>;
    game: Observable<Game>;
    userKey
    
    constructor(private db: AngularFirestore, private auth: AuthService) {

    }

    // probably dont need either of these
    get userId() { return this.userDoc.ref.id }

    get gameId() { return this.gameDoc.ref.id }
}
