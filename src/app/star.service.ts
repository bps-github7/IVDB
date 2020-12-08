import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Rating } from './models/content/rating';


@Injectable({
  providedIn: 'root'
})
export class StarService {

  constructor(private afs : AngularFirestore) {

   }

   rating_exists(userId : string, gameId :  string) {
        const docRef = this.afs.collection('ratings').doc(`${userId}_${gameId}`);
        docRef.get().then()
   }

    getUserStars(userId : string) {
        const ratingRef = this.afs.collection('ratings', (ref) => ref.where('userId', '==', userId));
        return ratingRef.valueChanges();
    }

    getGameRating(userId :  string, gameId : string) : Observable<Rating> {
        return this.afs.collection('ratings').doc<Rating>(`${userId}_${gameId}`).valueChanges();
    }

    setRating(userId : string, gameId : string, value : number) {

        //rating document data
        const rating : Rating = {userId, gameId, value};

        //create unique path for each rating
        const ratingPath = `ratings/${rating.userId}_${rating.gameId}`

        //return the promise after setting data in the document
        return this.afs.doc(ratingPath).set(rating);
    }

    //seperate method for deleting a rating
    deleteRating(userId, gameId) {
        if (!confirm('Are you sure that you want to delete your rating for this game?')) return;
        return this.afs.doc(`ratings/${userId}_${gameId}`).delete();
    }
}
