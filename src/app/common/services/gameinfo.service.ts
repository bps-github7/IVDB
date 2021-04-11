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
    metadata : string [];

    constructor(private afs: AngularFirestore) { 
    }

    getAll$() {
        return this.afs.collection('game_info').valueChanges()
    }

    setAll$() {
        // called when you submit the list of categories, creators, console_makers for update
        // in game-info-form. 
    }

    getMetadata$(type:string) {
        /* method returns the description for a certain type of game info
        pass in 'category','creator','console','category' to get a GameDescriptor
        which defines the type of gameInfo */
        return this.afs.collection(`game_info/${type}`).valueChanges();
    }

    getType$(type : string) {
        const typeRef = this.afs.collection<GameDescriptor[]>('game_info', (ref) => ref.where('type','==', type));
        return typeRef.valueChanges({idField : 'uid'});
    }

    
    getDocument$(title : string) {
        //TODO why arent we using doc(`game_info/${uid}`) instead???!!!! so much better! no more p[0] bullshit
    // getDocument$(title : string, type : string = 'category') {
        const docRef = this.afs.collection<GameDescriptor>('game_info', (ref) => 
            ref.where('title', '==', title));
        return docRef.valueChanges({idField : 'uid'});
    }

    //violating encapsulation (sort of) by looking into two database with the same service
    // but consoles are just a more complicated, specific form of game info, with their own collection
    // for accesibility/ simplicity sake.

    getConsoles$() {
        return this.afs.collection('consoles').valueChanges({idField : 'uid'});
    }

    getConsole$(uid : string) {
        return this.afs.doc<VgConsole>(`consoles/${uid}`).valueChanges();
    }

    getConsoleWithName$(name : string) {
        /* We will have to use the p[0] goofy ass syntax 
        since this returns an array of possible matches. */
        return this.afs.collection('consoles', (ref) => ref.where("name","==", name))
        .valueChanges();
    }

    getConsoleMaker$(maker : string) {
        return this.afs.collection('consoles', (ref) => ref.where('maker','==',maker))
        .valueChanges({idField : 'uid'})
    }

    addConsole(newConsole : VgConsole) {
        this.afs.collection<VgConsole>('consoles').add(newConsole)
        .then(() => console.log("document succesfully written to!"))
        .catch((err) => console.log(`Error while writing to document : ${err}`));
    }

    editConsole(uid : string, newConsole : VgConsole) {
        this.afs.doc<VgConsole>(`consoles/${uid}`).set({
            nickname : newConsole.nickname.toLowerCase(),
            name : newConsole.name.toLowerCase(),
            qualifiedName : newConsole.qualifiedName.toLowerCase(),

            generation : newConsole.generation,
            maker : newConsole.maker.toLowerCase(),
            type : newConsole.type,

            released: newConsole?.released,
            image: newConsole?.image,
            description: newConsole?.description,
            uid: newConsole?.uid

            // released : newConsole.released,
            // type : newConsole.type,
            // maker : newConsole.maker
        }).then(() => console.log("Document succesfully updated!"))
        .catch((err) => console.log(`Error while writing to document: ${err}`));

    }

    deleteConsole(uid) {
        this.afs.doc(`consoles/${uid}`).delete();

    }


    add(descriptor : any) {
        this.afs.collection('game_info').add({
            title : descriptor.title.toLowerCase(),
            type : descriptor.type,
            description : descriptor.description
        })
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
            title : descriptor.title.toLowerCase(),
            description : descriptor.description
       },{merge : patch})
       .then(() => console.log("document succesfully updated"))
       .catch((err) => console.log(`Error while updating document: ${err}`));
    }
    
    delete(uid) {
        this.afs.collection('game_info').doc(uid).delete();
    }

}