import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Game } from 'src/app/admin/admin-games/games.component';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';


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
        return this.db.list('/Games').snapshotChanges()
        .pipe(
            map(a => a.map(
            ac =>{
            const data = ac.payload.val();
            const id = ac.payload.key;
            console.log(data);
            console.log(id)
            return {data,id};
            })))
    }

    get(gameId) {
        //probably need some other method appeneded to end.
        return this.db.object('/Games/' + gameId).valueChanges();

    }

    getGame(gameId) : Observable<Game> {
        return this.db.object<Game>('/Games/'+gameId).valueChanges().pipe(take(1));
        }
}
