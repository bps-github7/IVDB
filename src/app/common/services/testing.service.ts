import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { GameDescriptor } from 'src/app/models/content/GameDescriptor';

@Injectable({
  providedIn: 'root'
})


export class TestingService {

    // gameInfoCollection : AngularFirestoreCollection <GameDescriptor>;


    constructor(private afs: AngularFirestore) { 
    }

    getAll$() {
        return this.afs.collection('testing').valueChanges()
    }

    setAll$() {
        // called when you submit the list of categories, creators, console_makers for update
        // in game-info-form. 
    }

    getType$(type : string) {
        const typeRef = this.afs.collection<GameDescriptor[]>('testing', (ref) => ref.where('type','==', type));
        return typeRef.valueChanges();
    }

    getDocument$(title : string, type : string) {
        const docRef = this.afs.collection<GameDescriptor[]>('testing', (ref) => 
            ref.where('type','==', type).where('title', '==', title));
        return docRef.valueChanges().pipe(take(1));
    }



    add(descriptor : GameDescriptor) {
        this.afs.collection('testing').add(descriptor)
        .then(()=> console.log("Documet succesfully written to"))
        .catch((err) => console.log(`Error while writing to doc ${err}`));
    }

    update(descriptor, patch=true) {
        /* for updating a single document.

        descriptor- the updated object you want to push to the game-info collection
        
        set patch to false to perform http PUT- complete overwrite of existing data.
        (no known use cases yet).
        */
       this.afs.doc(`testing/${descriptor.uid}`).set({
            uid : descriptor.uid,
            type : descriptor.type,
            title : descriptor.title,
            description : descriptor.description
       },{merge : patch})
       .then(() => console.log("document succesfully updated"))
       .catch((err) => console.log(`Error while updating document: ${err}`));
    }
    
    delete(uid) {
        this.afs.collection('testing').doc(uid).delete();
    }
}
