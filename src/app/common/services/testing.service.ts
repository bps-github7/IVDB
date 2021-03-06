import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { GameDescriptor } from 'src/app/models/content/GameDescriptor';

@Injectable({
  providedIn: 'root'
})
export class TestingService {

    gameInfoCollection : AngularFirestoreCollection <GameDescriptor>;


  constructor(private afs: AngularFirestore) { 
    this.gameInfoCollection = this.afs.collection('testing');
  }

    get categories() : Observable <GameDescriptor []> {
        return this.gameInfoCollection.doc<GameDescriptor[]>('categories').valueChanges();
    }


    get creators() {
        return this.gameInfoCollection.doc('creators').valueChanges();
    }

    
    get nintendo() {
        return this.gameInfoCollection.doc('nintendo').valueChanges();
    }

    
    get sony() {
        return this.gameInfoCollection.doc('sony').valueChanges();
    }

    get microsoft() {
        return this.gameInfoCollection.doc('microsoft').valueChanges();
    }
    

    get pc() {
        return this.gameInfoCollection.doc('pc').valueChanges();
    }

    
    get web() {
        return this.gameInfoCollection.doc('web').valueChanges();
    }

    
    get mobile() {
        return this.gameInfoCollection.doc('mobile').valueChanges();
    }






}
