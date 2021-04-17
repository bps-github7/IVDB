import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
// import { News } from 'src/app/models/content/News';
import { Content } from '../models/content/content';

@Injectable({
  providedIn: 'root'
})
export class NewsService {


    // this syntax can be a bit... messy
    // newsCollection : AngularFirestoreCollection<News>;
    // news$ : Observable<News []>
    newsCollection : AngularFirestoreCollection<Content>


    constructor(private afs : AngularFirestore) {
        this.newsCollection = this.afs.collection<Content>('news')
        // this.newsCollection = this.afs.collection<Content>("news");
        // this.news$ = this.newsCollection.valueChanges();

    }

    getAll$() {
        return this.newsCollection.valueChanges({ idField : 'uid'});
    }

    get$( uid : string) {
        return this.newsCollection.doc<Content>(uid).valueChanges();
    }

    create( newsContent : Content ) {
      //is there a better syntax for this than destructuring?
        const { uid, ...content } = newsContent
        this.newsCollection.add(content)
        .then(() => console.log("Successfuly created news document"))
        .catch((err) => console.log(`Error while creating news document: ${err}`));
    }

    edit( uid : string, updatedContent : Content ) {
        this.newsCollection.doc(uid).update(updatedContent)
        .then(() => console.log("successfuly updated news document"))
        .catch((err) => console.log(`Error while updating news document : ${err}`));

    }

    delete(uid : string) {
        this.newsCollection.doc(uid).delete()
        .then(() => console.log("successfuly deleted news document"))
        .catch((err) => console.log(`Error while deleting news document : ${err}`));
    }


    // get_news_post(id : string)
}
