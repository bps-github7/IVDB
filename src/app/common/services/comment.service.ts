import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

    /*
        Service for getting comments to populate a comments section.
        comments will be identified as follows:
        userName_contentId
    */

  constructor(private afs : AngularFirestore) { }

    getAll$(contentId : string) :  Observable<Comment []> {
        /* returns all comments tagged to a piece of content
        as an observable of type comment []
        */
        const commentRef = this.afs.collection<Comment>('comments', (ref) => ref.where('contentId', '==', contentId));

        return commentRef.valueChanges();
    }

    getUserComments$(username : string) {
        const userComments = this.afs.collection<Comment>('comments', (ref) => ref.where('username', '==', username));
        return userComments.valueChanges();
    }
}
