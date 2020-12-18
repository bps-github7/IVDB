import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
// import { AngularFireDatabase } from '@angular/fire/database';
// import { map, take } from 'rxjs/operators';
import { Game } from '../../models/content/Game';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameService {

        gamesCollection : AngularFirestoreCollection<Game>;
        gameDocument : AngularFirestoreDocument<Game>;
        games$ : Observable<Game[]>;
    

    constructor(private db: AngularFirestore) {
        this.gamesCollection = this.db.collection('games');
        this.games$ = this.gamesCollection.valueChanges();
    }

    //two seperate get methods for returning either firestoreDocument or Observable
    get(game_title) : AngularFirestoreDocument<Game> {
         return this.db.doc('games/' + game_title);
    }

    get$(game_title) : Observable<Game> {
        return this.db.doc('games/' + game_title).valueChanges();

    }


    update(game_title, game) {
        return this.get(game_title).update(game);
    }

    create(game) {
        const docPath = `games/${game.title}`;
        
        return this.gamesCollection.doc(docPath).set(game);
    }

    delete(game_title) {
        // this.db.object('/games/' + game_title).remove();
        return this.get(game_title).delete();
    }

    getAll$() {
        return this.games$;
    }
}
