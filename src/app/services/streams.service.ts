import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Content } from '../models/content/content';

@Injectable({
  providedIn: 'root'
})
export class StreamsService {

  streamsCollection : AngularFirestoreCollection<Content>

  constructor( private afs : AngularFirestore) {
    this.streamsCollection = this.afs.collection<Content>('streams')
  }

  getAll$() {
    return this.streamsCollection.valueChanges({ idField : 'uid' });
  }

  get$( uid : string) {
    return this.streamsCollection.doc(uid).valueChanges();
  }

  create( stream : Content ) {
    this.streamsCollection.add(stream)
    .then(() => console.log('Successfully added a new stream'))
    .catch((err) => console.log(`Error while adding a new stream: ${err}`));
  }

  edit(uid: string, newStream : Content) {
    this.streamsCollection.doc(uid).update(newStream)
    .then(() => console.log('Successfully updated stream'))
    .catch((err) => console.log(`Error while try to update stream: ${err}`));
  }

  delete(uid: string) {
    this.streamsCollection.doc(uid).delete()
    .then(() => console.log('Successfully deleted stream'))
    .catch((err) => console.log(`Error while try to delete stream: ${err}`));
  }
}
