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
    gameInfo$ : Observable<gameInfo[]>;
    info : any;

    constructor(private afs : AngularFirestore) {
        this.gameInfoCollection = this.afs.collection('game_info');
        this.gameInfo$ = this.gameInfoCollection.valueChanges();
        //LETS get rid of this line, figure out how to get observable of db doc to work instead.
        this.gameInfoCollection.doc('KZX1GyjNGtwUzHsyICBO').ref.get().then((doc) => this.info = doc.data());
     }

    // get_console(name : string) {
    //     console;
    //     this.gameInfo$.subscribe(resp => { console = resp })
    // }

}