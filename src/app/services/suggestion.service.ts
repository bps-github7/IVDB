import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Suggestion } from 'src/app/models/content/Suggestion';

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {

    // not sure why it wont let me, this should be <Suggestion []>
    suggestionsCollection : AngularFirestoreCollection<Suggestion>;



  constructor(private afs : AngularFirestore) {
      this.suggestionsCollection = this.afs.collection('suggestions');
   }

  submit(request) {
      this.suggestionsCollection.add(
          {
              type: request.type,
              title: request.title,
              description: request.description,
              links : request.links
          }
      );
  }

  getAll$() {
      return this.suggestionsCollection.valueChanges({uid : 'idField'})
  }

}
