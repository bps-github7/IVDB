import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
// import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

interface gameInfo {
    //dont like how the console types are capitalized. bah..
    microsoft?: string [],
    sony?: string [],
    nintendo?: string [],
    pc?: string [],
    categories?:  string | string [],
    creators?: string | string [],
    console_makers?: string | string []

}

@Injectable({
  providedIn: 'root'
})




export class GameInfoService {

    //has to be an array because reasons...
    gameInfoCollection : AngularFirestoreCollection<gameInfo>;
    gameInfoDocument : AngularFirestoreDocument<gameInfo>;
    doc_id = 'KZX1GyjNGtwUzHsyICBO';
    gameInfo$;
    info : any;

    constructor(private afs : AngularFirestore) {
        this.gameInfoCollection = this.afs.collection('game_info');
        this.gameInfo$ = this.gameInfoCollection.doc(this.doc_id).valueChanges();
        //LETS get rid of this line, figure out how to get observable of db doc to work instead.
        // this.gameInfoCollection.doc('KZX1GyjNGtwUzHsyICBO').ref.get().then((doc) => this.info = doc.data());
     }

    get_console(company : string, name : string) {
        this.gameInfoCollection.doc('KZX1GyjNGtwUzHsyICBO').ref.get().then((doc) => this.info = doc.data().compamy)
        return this.info
    }

}