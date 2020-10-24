import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { News } from 'src/app/models/content/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

    newsCollection : AngularFirestoreCollection<News>;


    constructor(private afs : AngularFirestore) {
        this.newsCollection = this.afs.collection("news");
    }

    get news() : Observable<News[]> {
        return this.newsCollection.valueChanges();
    }

    // get_news_post(id : string)
}
