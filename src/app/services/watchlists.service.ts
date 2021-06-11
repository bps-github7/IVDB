import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Content } from '../models/content/content';

@Injectable({
  providedIn: 'root'
})
export class WatchlistsService {

  watchlistsCollection : AngularFirestoreCollection<Content>

  constructor( private afs : AngularFirestore) {
    this.watchlistsCollection = this.afs.collection<Content>('watchlists')
  }

  getAll$() {
    return this.watchlistsCollection.valueChanges({ idField : 'uid' });
  }

  get$( uid : string) {
    return this.watchlistsCollection.doc(uid).valueChanges();
  }

  create( watchlist : Content ) {
//is there a better syntax for this than destructuring?
    // avoids a weird side effect by ensuring no uid in object were about to create
    // const { uid, ...content } = watchlist
    // this.watchlistsCollection.add(content)
    // .then(() => console.log('Successfully added a new watchlist'))
    // .catch((err) => console.log(`Error while adding a new watchlist: ${err}`));
  }

  edit(uid: string, newwatchlist : Content) {
    this.watchlistsCollection.doc(uid).update(newwatchlist)
    .then(() => console.log('Successfully updated watchlist'))
    .catch((err) => console.log(`Error while try to update watchlist: ${err}`));
  }

  delete(uid: string) {
    this.watchlistsCollection.doc(uid).delete()
    .then(() => console.log('Successfully deleted watchlist'))
    .catch((err) => console.log(`Error while try to delete watchlist: ${err}`));
  }
  }
