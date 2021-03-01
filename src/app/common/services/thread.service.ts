import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Thread } from 'src/app/models/content/Thread';

@Injectable({
  providedIn: 'root'
})
export class ThreadService {

    thread_collection : AngularFirestoreCollection<Thread []>


    constructor(private afs : AngularFirestore) {
        this.thread_collection = this.afs.collection('threads');
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

    // what is a thread? no object made for it  not typecasted to anything
    create(thread) {
        /*Create a thread 
         */
        this.thread_collection.add(thread);

    }

    update(id, thread) {
        /* edit a thread
        */
       this.thread_collection.doc(id).set(thread)
    }

    delete(id) {
        /* used to delete a thread 
        */
        this.thread_collection.doc(id).delete();
    }


   
}
