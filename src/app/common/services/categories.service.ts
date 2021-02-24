import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { GameInfo } from '../../models/content/GameInfo';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

    gameInfoCollection : AngularFirestoreCollection<GameInfo []>

    constructor(private afs : AngularFirestore) { 
        this.gameInfoCollection = this.afs.collection<GameInfo []>('categories')
    }

  getAll$() {
    return this.gameInfoCollection.valueChanges()
  }

}


