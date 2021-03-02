import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Thread } from 'src/app/models/content/Thread';

@Injectable({
  providedIn: 'root'
})

export class ThreadService {

    threadCollection : AngularFirestoreCollection<Thread []>


    constructor(private afs : AngularFirestore) {
        this.threadCollection = this.afs.collection('threads');
    }

    get$(id : string) : Observable<any> {
        // const threadRef = this.afs.doc('threads/' + id);
        // return threadRef.valueChanges({idField : 'uid'});
        return this.afs.doc('threads/' + id).valueChanges();
    
        // cant have uid on document, cant have a 2 piece path on an object like 'collection/documentID'. consult SE
    }

    get_threads_by_topic(option : string) {
        const threadRef = this.afs.collection<Thread>('threads', (ref) => ref.where('topic', '==', option));
        return threadRef.valueChanges({idField: 'uid'});
    }

    add(thread) {
        this.threadCollection.add(thread);
    }
    
    save(thread, uid) {
        this.threadCollection.doc(uid).set({
            // author : thread.author,
            title : thread.title,
            description : thread.description,
            topic : thread.topic    
        },
        {merge : true})
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((err) => {
            console.log("error writting to document: " + err);
        })
        }

    delete(id) {
        /* used to delete a thread 
        */
        this.threadCollection.doc(id).delete();
    }


   
}
