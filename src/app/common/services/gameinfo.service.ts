import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
// import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Game } from 'src/app/models/content/Game';
import { gameInfo } from 'src/app/models/content/GameInfo';
import { Game_Descriptor } from 'src/app/models/content/Game_Descriptor';
import { VG_Console } from 'src/app/models/content/VG_Console';

@Injectable({
  providedIn: 'root'
})

class GameInfo implements gameInfo {
    categories: Game_Descriptor [];
    console_makers: Game_Descriptor [];
    creators: Game_Descriptor [];
    microsoft: VG_Console [];
    nintendo: VG_Console [];
    pc: VG_Console []
    sony: VG_Console [];
    


}

export class GameInfoService {

    gameInfoCollection : AngularFirestoreCollection<gameInfo>;
    gameInfoDocument : AngularFirestoreDocument<gameInfo>;
    doc_id = 'KZX1GyjNGtwUzHsyICBO';
    gameInfo$;

    constructor(private afs : AngularFirestore) {
        this.gameInfoCollection = this.afs.collection<GameInfo>('game_info');
        this.gameInfo$ = this.gameInfoCollection.doc(this.doc_id).valueChanges();
        }
/* 
    get categories$() {
        return this.gameInfoCollection.valueChanges().pipe(map(doc => {
            return doc.map(g => {
                var categories : Game_Descriptor [];
                // let gameInfo = new GameInfo();
                categories = g.categories;
                return categories;
            })

        }));

    } */

    get categories() {
        return this.gameInfoCollection.doc('/categories')
        .valueChanges();
    }

    get creators() {
        return this.gameInfoCollection.doc('/creators')
        .valueChanges();
    }

    get console_makers() {
        return this.gameInfoCollection.doc('/console-makers')
        .valueChanges();
    }    

    get sony() : Array<VG_Console> {
        return [];
    }

    get nintendo() : Array<VG_Console> {
        return [];
    }

    get microsoft() : Array<VG_Console> {
        return [];
    }

    get pc() : Array<VG_Console> {
        return [];
    }

}