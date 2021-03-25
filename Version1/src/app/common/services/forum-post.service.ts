import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ForumPost } from 'src/app/models/content/ForumPost';

@Injectable({
  providedIn: 'root'
})
export class ForumPostService {

    constructor(private afs : AngularFirestore) { }


    getPosts$(threadTitle) {
        /* Most basic fuctionality of posts. get all posts for a thread */
        const postRef = this.afs.collection<ForumPost>('forum_posts', (ref) => ref.where('thread','==',threadTitle))
        return postRef.valueChanges({idField : 'uid'});
    }

    getPost$(uid) {
        /* For getting a single post, in order to edit it*/
        return this.afs.doc<ForumPost>(`forum_posts/${uid}`).valueChanges()
    }

    addPost(post) {
        /*  */
        this.afs.collection('forum_posts').add(post)
        .then(() => { console.log("Successfully added document") })
        .catch((err) => { console.log(`Error while adding document: ${err}`) });
    }

    updatePost(updatedPost) {
        /*  */
        this.afs.doc(`forum_posts/${updatedPost.uid}`).set({
            creator : updatedPost.creator,
            thread : updatedPost.thread,
            text : updatedPost.text
        })
        .then(() => { console.log("Successfully updated document") })
        .catch((err) => { console.log(`Error while updating document: ${err}`) });
    }

    deletePost(uid) {
        /*  */
        this.afs.doc(`forum_posts/${uid}`).delete();
    }
}
