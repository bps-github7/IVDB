import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class GenerateGameService {

    constructor(private db: AngularFireDatabase) { }

    getCategories() {
        return this.db.list('/Categories').snapshotChanges();
    }

    getCreators() {
        return this.db.list('/Creators').snapshotChanges();
    }

    getConsoleMakers() {
        return this.db.list('/ConsoleMakers').snapshotChanges();

    }

    create(game) {
        return this.db.list('/Games').push(game);
    }

    getAll() {
        return this.db.list('/Games').valueChanges();
    }

    get(gameId) {
        //probably need some other method appeneded to end.
        return this.db.object('/Games/' + gameId).valueChanges();
    }
}
