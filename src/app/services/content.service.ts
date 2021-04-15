import { Watchlist } from './../models/content/watchlist';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

    content: any [];

    watchlists : AngularFirestoreCollection<any>;
    streams : AngularFirestoreCollection<any>;
    news : AngularFirestoreCollection<any>;


  constructor(private afs: AngularFirestore) {
    this.watchlists = this.afs.collection("watchlists");
    this.streams = this.afs.collection('streams');
    this.news = this.afs.collection('news');

    // create 
   }

   // cant modify content from here, only filter. view/ how useful is that???
}
