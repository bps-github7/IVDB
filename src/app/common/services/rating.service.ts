import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AppUser } from 'src/app/models/app.user';
import { Game } from 'src/app/models/game';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class RatingService {

    userDoc: AngularFirestoreDocument<AppUser>;
    gameDoc: AngularFirestoreDocument<Game>;

    user: Observable<AppUser>;
    game: Observable<Game>;
    
    constructor(private db: AngularFirestore, private auth: AuthService) { 
        this.db.doc('user/'+ this.auth.uid)
    }
}
