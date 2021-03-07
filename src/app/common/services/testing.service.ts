import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
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
    // this.gameInfoCollection = this.afs.collection('testing');
  }

    get_type(type : string) {
        const typeRef = this.afs.collection<GameDescriptor[]>('testing', (ref) => ref.where('type','==', type));
        return typeRef.valueChanges();
    }

    updateCategory(newCategory : NewGameDescriptor) {
    }


    // get creators() {
    //     return this.gameInfoCollection.doc('creators').valueChanges();
    // }

    
    // get nintendo() {
    //     return this.gameInfoCollection.doc('nintendo').valueChanges();
    // }

    
    // get sony() {
    //     return this.gameInfoCollection.doc('sony').valueChanges();
    // }

    // get microsoft() {
    //     return this.gameInfoCollection.doc('microsoft').valueChanges();
    // }
    

    // get pc() {
    //     return this.gameInfoCollection.doc('pc').valueChanges();
    // }

    
    // get web() {
    //     return this.gameInfoCollection.doc('web').valueChanges();
    // }

    
    // get mobile() {
    //     return this.gameInfoCollection.doc('mobile').valueChanges();
    // }
}
