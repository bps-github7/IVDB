import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Rating } from './models/rating';


@Injectable({
  providedIn: 'root'
})
export class StarService {

  constructor(private db : AngularFirestore) {

   }

    getGameRating(userId) {
        const ratingRef = this.db.collection('rating', ref => ref.where('userId', '==', userId));
        return ratingRef.valueChanges();
    }

    setRating(userId, gameId, value) {

        //rating document data
        const rating : Rating = {userId, gameId, value};

        //create unique path for each rating
        const ratingPath = 'ratings/${rating.userId}_${rating.gameId}'

        //return the promise after setting data in the document
        return this.db.doc(ratingPath).set(rating);
    }

    //seperate method for deleting a rating
    deleteRating(userId, gameId) {
        if (!confirm('Are you sure that you want to delete your rating for this game?')) return;
        return this.db.doc('ratings/${userId}_${gameId}').delete();
    }
}
