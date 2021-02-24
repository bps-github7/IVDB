import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { GameInfo } from 'src/app/models/content/GameInfo';

@Injectable({
  providedIn: 'root'
})
export class ConsoleMakersService {

    consoleMakersCollection : AngularFirestoreCollection<GameInfo []>

    constructor(private afs : AngularFirestore) {
        this.consoleMakersCollection = this.afs.collection('console_makers')
    }

    getAll$() {
        return this.consoleMakersCollection.valueChanges()
    }


}
