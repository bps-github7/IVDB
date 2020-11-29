import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
// import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';



interface gameInfo {
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
        var info;
        this.gameInfoCollection.doc(this.doc_id).ref.get().then((doc) => info = doc.data().compamy)
        return info;
    }

    get_creator(creator : string) {
        var info;
        // this.gameInfoCollection.doc(this.doc_id).ref.get().then((doc) => info = doc.data()creator)
        return info
    }

}