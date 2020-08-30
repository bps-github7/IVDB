import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map, take } from 'rxjs/operators';
import { Game } from '../../models/game';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private db: AngularFireDatabase) {

   }

   update(gameId, game) {
       return this.db.object('/Games/' + gameId).update(game);
   }

   create(game) {
       return this.db.list('/Games').push(game);
   }

   delete(gameId) {
       this.db.object('/Games/' + gameId).remove();
   }

    get(gameId) : Observable<Game>{
        return this.db.object<Game>('/Games/'+gameId).valueChanges().pipe(take(1));
    }

   getAll() {
    // this one doesnt return an observable
    return this.db.list('/Games').snapshotChanges()
    .pipe(
    map(a => a.map(
    ac =>{
    const data = ac.payload.val();
    const id = ac.payload.key;
    console.log(data);
    console.log(id)
    return {data,id};
    
        }
      ))
    )
    
    }

    getAll$() {
        return this.db.list('/Games').snapshotChanges()
    }
}
