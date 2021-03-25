import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Review } from 'src/app/models/content/Review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

    /*
    Service for communicating with review collection in our cloud db. 
    
    TODO: need to update this entire service so that we have a better,
    more routable (important part) way of accessing reviews like so:
    `contentID_userid`

    then route to the id differently, like

    `contentID/username`
    */

    exists: boolean = false;


    constructor(private afs : AngularFirestore) { }

  
    getReviewAsPromise(username : string, game_title :  string) : Promise<Review> {
        /* This will allow us to get the value from observable 
        to check whether or not review exists, in component logic.
         */
        return this.getGameReview(username, game_title).pipe(take(1))
        .toPromise();
    }


    getUserReviews(username : string) : Observable<Review []> {
        const reviewsRef = this.afs.collection<Review>('reviews', (ref) => ref.where('username', '==', username));
        return reviewsRef.valueChanges();
    }

    getGameReview(username :  string, game_title : string) : Observable<Review> {
        return this.afs.collection('reviews').doc<Review>(`${username}_${game_title}`).valueChanges();
    }

    review_exists(review) : boolean {
        this.getReviewAsPromise(review.username, review.game_title).then((review : Review) => {
            if (review) { 
                this.exists = true;
            }
        });
        console.log("review_exists returns this : " + this.exists)
        return this.exists;
    }

    setReviewHandler(review : Review) {
        /* Prevents users from accidentally overwriting existing ratings.
         */    
        if (this.review_exists(review)) {
            if (confirm("users can only submit one review per game.\nSubmitting the current review will overwrite existing review. proceed anyways?")) {
                return this.setReview(review);
            } 
        }
        return this.setReview(review);
    }

    setReview(review : Review) {
        //create unique path for each review
        const ratingPath = `reviews/${review.username}_${review.game_title}`

        //return the promise after setting data in the document
        return this.afs.doc(ratingPath).set(review);
    }

    //seperate method for deleting a review
    deleteReview(username, game_title) {
        if (!confirm('Are you sure that you want to delete your review for this game?')) return;
        return this.afs.doc(`reviews/${username}_${game_title}`).delete();
    }
}
