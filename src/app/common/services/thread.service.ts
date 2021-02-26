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
        return this.afs.doc('threads/' + id).valueChanges();
    }

    create(thread) {
        /*Create a thread 
         */
        this.thread_collection.add(thread);

    }

    update() {
        /* edit a thread
        */
    }

    delete() {
        /* used to delete a thread 
        */
    //    this.thread_collection.delete()
    }


   
}
