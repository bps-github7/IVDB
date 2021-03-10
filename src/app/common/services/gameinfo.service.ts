import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
// import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Game } from 'src/app/models/content/Game';
import { GameInfo } from 'src/app/models/content/GameInfo';
import { GameDescriptor } from 'src/app/models/content/GameDescriptor';
import { VgConsole } from 'src/app/models/content/VgConsole';

@Injectable({
  providedIn: 'root'
})

export class GameInfoService {
    // gameInfoCollection : AngularFirestoreCollection <GameDescriptor>;


    constructor(private afs: AngularFirestore) { 
    }

    getAll$() {
        return this.afs.collection('game_info').valueChanges()
    }

    setAll$() {
        // called when you submit the list of categories, creators, console_makers for update
        // in game-info-form. 
    }

    getType$(type : string) {
        const typeRef = this.afs.collection<GameDescriptor[]>('game_info', (ref) => ref.where('type','==', type));
        return typeRef.valueChanges();
    }

    
    getDocument$(title : string) {
    // getDocument$(title : string, type : string = 'category') {
        const docRef = this.afs.collection<GameDescriptor>('game_info', (ref) => 
            ref.where('title', '==', title));
        return docRef.valueChanges();
    }



    add(descriptor : GameDescriptor) {
        this.afs.collection('game_info').add(descriptor)
        .then(()=> console.log("Documet succesfully written to"))
        .catch((err) => console.log(`Error while writing to doc ${err}`));
    }

    update(descriptor, patch=true) {
        /* for updating a single document.

        descriptor- the updated object you want to push to the game-info collection
        
        set patch to false to perform http PUT- complete overwrite of existing data.
        (no known use cases yet).
        */
       this.afs.doc(`game_info/${descriptor.uid}`).set({
            uid : descriptor.uid,
            type : descriptor.type,
            title : descriptor.title,
            description : descriptor.description
       },{merge : patch})
       .then(() => console.log("document succesfully updated"))
       .catch((err) => console.log(`Error while updating document: ${err}`));
    }
    
    delete(uid) {
        this.afs.collection('game_info').doc(uid).delete();
    }

}