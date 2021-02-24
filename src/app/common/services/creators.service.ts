import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { GameInfo } from 'src/app/models/content/GameInfo';

@Injectable({
  providedIn: 'root'
})
export class CreatorsService {

    creatorsCollection: AngularFirestoreCollection<GameInfo []>

    constructor(private afs : AngularFirestore) { 
        this.creatorsCollection = this.afs.collection('creators');
    }

    getAll$() {
        return this.creatorsCollection.valueChanges();
    }


}
    