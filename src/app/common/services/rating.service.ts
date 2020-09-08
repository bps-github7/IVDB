import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { User } from 'src/app/models/user';
import { Game } from 'src/app/models/game';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class RatingService {

    userDoc: AngularFirestoreDocument<User>;
    gameDoc: AngularFirestoreDocument<Game>;

    user: Observable<User>;
    game: Observable<Game>;
    
    constructor(private db: AngularFirestore, private auth: AuthService) { 
        // this.db.doc('user/'+ this.auth.uid)
    }
}
