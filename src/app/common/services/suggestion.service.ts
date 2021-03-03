import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {

    suggestionsCollection : AngularFirestoreCollection;

  constructor(private afs : AngularFirestore) {
      this.suggestionsCollection = this.afs.collection('suggestions');
   }

  submit(request) {
      this.suggestionsCollection.add(request);
  }

  getAll$() {
      return this.suggestionsCollection.valueChanges({uid : 'idField'})
  }

}
