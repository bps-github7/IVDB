import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
// import { AngularFireDatabase } from '@angular/fire/database';
// import { map, take } from 'rxjs/operators';
import { Game } from '../../models/content/game';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

        gamesCollection : AngularFirestoreCollection<Game>;
        gameDocument : AngularFirestoreDocument<Game>;
        games : Observable<Game[]>;
    

    constructor(private db: AngularFirestore) {
        this.gamesCollection = this.db.collection('games');
        this.games = this.gamesCollection.valueChanges({idField : 'id'});
    }

    //two seperate get methods for returning either firestoreDocument or Observable
    get(gameId) : AngularFirestoreDocument<Game> {
         return this.db.doc('games/' + gameId);
    }

    get$(gameId) : Observable<Game> {
        return this.db.doc('games/' + gameId).valueChanges();

    }

    update(gameId, game) {
        return this.get(gameId).update(game);
    }

    create(game) {
        // return this.db.list('/games').push(game);
        return this.gamesCollection.add(game);
    }

    delete(gameId) {
        // this.db.object('/games/' + gameId).remove();
        return this.get(gameId).delete();
    }

    getAll$() {
        return this.games;
    }
}
