import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { GameDescriptor } from 'src/app/models/content/GameDescriptor';

@Injectable({
  providedIn: 'root'
})
export class ForumInfoService {

    allMetadata : any;    

    constructor(private afs : AngularFirestore) {
        this.allMetadata = this.afs.collection('forum_info', (ref) => ref.where('type','==','metadata'));

    }

    get metadata$() {
        return this.allMetadata.valueChanges();
    }

    getDocument$(title : string) {
        const docRef = this.afs.collection<GameDescriptor>('forum_info', (ref) => 
            ref.where('title', '==', title));
        return docRef.valueChanges({idField : 'uid'});    }

    getType$(type : string) {
        /* Pass in a type to get an array of observables containing all  documents of that type
        pass in values as a singluar noun - 'category','prefix', etc.. not 'prefixes', 'categories'  
        */
        return this.afs.collection('forum_info', (ref) => ref.where('type','==',type))
        .valueChanges({idField : 'uid'});
    } 

    add(descriptor) {
        /* Use to add a descriptor to forum info- should contain at least -title, description,type */
        this.afs.collection('forum_info').add(descriptor)
        .then(() => { console.log("successfully added document!"); })
        .catch((err) => { console.log(`Error while creating doc ${err}`); })
    }

    update(newDescriptor) {
        /* requires the complete descriptor object WITH UID, to update that document  */
        this.afs.doc(`forum_info/${newDescriptor.uid}`).set({
            title : newDescriptor.title,
            description : newDescriptor.description,
            type : newDescriptor.type,
            uid : newDescriptor.uid
        })
        .then(() => { console.log("successfully updated the document!"); })
        .catch((err) => { console.log(`Error while writing to doc ${err}`); })
    }

    delete(uid) {
        /* pass in doc uid to delete that doc from forum info collection */
        this.afs.doc(`forum_info/${uid}`).delete();
    }
}
