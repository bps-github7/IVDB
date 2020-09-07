import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
// import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

interface gameInfo {
    //dont like how the console types are capitalized. bah..
    Microsoft?: string [],
    Sony?: string [],
    Nintendo?: string [],
    categories?:  string | string [],
    creators?: string | string [],
    console_makers?: string | string []

}

@Injectable({
  providedIn: 'root'
})




export class GameInfoService {

    // gameInfoCollection : AngularFirestoreCollection<gameInfo>;
    gameInfoDocument : AngularFirestoreDocument<gameInfo>;
    gameInfo : Observable<gameInfo>;

    constructor(private db: AngularFirestore) { 
        // this.gameInfoCollection = this.db.collection('game_info', ref => {
        //     // return ref.orderBy('categories', 'desc');
        //     return ref.where('categories', '==', true);
        // });
        // this.gameInfo = this.gameInfoCollection.valueChanges();
        this.gameInfoDocument = this.db.doc('game_info/KZX1GyjNGtwUzHsyICBO');
        this.gameInfo = this.gameInfoDocument.valueChanges();
    }

    get gameInfo$() {
        return this.gameInfo;
    }
}