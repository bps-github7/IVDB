import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Forum } from 'src/app/models/content/Forum';

@Injectable({
  providedIn: 'root'
})
export class ForumsService {

  constructor(private afs : AngularFirestore) {

   }

    getAll$() {
        return this.afs.collection<Forum>('forums')
        .valueChanges({idField : 'uid'})
    }

    getCategory$(category : string) {
        return this.afs.collection('forums',
        (ref) => ref.where('category','==',category))
        .valueChanges({idField : 'uid'});
    }

    addForum(forum : Forum) {
        this.afs.collection('forums').add(forum)
        .then(() => { console.log('Document successfully added!') })
        .catch((err) => { console.log(`Error while adding document:  ${err}`) });
    }

    updateForum(forum : Forum) {
        this.afs.doc(`forums/${forum.uid}`).set({
            title : forum.title,
            description : forum.description,
            category : forum.category,
            uid : forum.uid,
            //add the other stuff later!
        })
        .then(() => { console.log('Document successfully updated!') })
        .catch((err) => { console.log(`Error while updating document:  ${err}`) });
    }

    deleteForum(uid) {
        this.afs.collection('forums').doc(uid).delete();
    }
}
