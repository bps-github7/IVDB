import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { Comment } from './../models/content/comment';

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

    getContentComments$(contentId : string) {
        /* returns all comments tagged to a piece of content
        as an observable of type comment []
        */
        const commentRef = this.afs.collection('comments', (ref) => ref.where('contentId', '==', contentId));
        return commentRef.valueChanges({idField : 'uid'});
    }

    getUserComments$(username : string) {
        const userComments = this.afs.collection<Comment>('comments', (ref) => ref.where('username', '==', username));
        return userComments.valueChanges({idField : 'uid'});
    }

    create(content : Comment) {
        /* Can be used for both creating and editing comments */
        this.afs.collection<Comment>('comments')
        .add({
            contentId : content.contentId,
            username : content.username,
            text : content.text,
            media : content.media ? content.media : null,
            metadata : content.metadata ? content.metadata : null})
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((err) => {
            console.log("error writting to document: " + err);
        })
    }

    update(content : Comment) {
            /* Can be used for both creating and editing comments */
            this.afs.collection<Comment>('comments').doc(content.uid)
            .set({
                contentId : content.contentId,
                username : content.username,
                text : content.text,
                media : content.media ? content.media : null,
                metadata : content.metadata ? content.metadata : null},
                {merge: true})
            .then(() => {
                console.log("Document successfully written!");
            })
            .catch((err) => {
                console.log("error writting to document: " + err);
            })
    }


    delete(uid : string) {
        if (!confirm('Are you sure you want to delete this comment (cannot be undone)?')) return;
        this.afs.collection('comments').doc(uid).delete();
    }
}
