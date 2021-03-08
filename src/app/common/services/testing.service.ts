import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { GameDescriptor } from 'src/app/models/content/GameDescriptor';
interface NewGameDescriptor {
    uid : string;
    type : string;
    title : string;
    description : string;
}

@Injectable({
  providedIn: 'root'
})


export class TestingService {

    // gameInfoCollection : AngularFirestoreCollection <GameDescriptor>;


    constructor(private afs: AngularFirestore) { 
    }

    get_type(type : string) {
        const typeRef = this.afs.collection<GameDescriptor[]>('testing', (ref) => ref.where('type','==', type));
        return typeRef.valueChanges();
    }

    get_document(title : string, type : string) {
        const docRef = this.afs.collection<GameDescriptor[]>('testing', (ref) => 
            ref.where('type','==', type).where('title', '==', title));
        return docRef.valueChanges().pipe(take(1));
    }

    update() {
    }


    add_new() {

    }

    set() {

    }

    delete() {

    }

}
