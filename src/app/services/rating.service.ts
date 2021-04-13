import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Rating } from '../models/content/rating';

@Injectable({
  providedIn: 'root'
})
export class RatingService {
    exists : boolean = false;;


    constructor(private afs : AngularFirestore) {
    }

    getRatingAsPromise(username : string, game_title :  string) : Promise<Rating> {
        /* This will allow us to get the value from observable 
        to check whether or not rating exists, in component logic.
         */
        return this.getGameRating(username, game_title).pipe(take(1))
        .toPromise();
    }


    getUserStars(username : string) : Observable<Rating []> {
        /* Returns all the ratings belonging to a specific user as an observable
        Takes a string, username, as the sole argument.
         */
        const ratingRef = this.afs.collection<Rating>('ratings', (ref) => ref.where('username', '==', username));
        return ratingRef.valueChanges();
    }


    getAll$(game_title : string) {
        /* Given a game_title, returns an observable of all ratings for the specific game
        in the ratings collection of our firestore db */
        const ratingRef = this.afs.collection('ratings', (ref) => ref.where('game_title', '==', game_title));
        return ratingRef.valueChanges();
    }

    getGameRating(username :  string, game_title : string) : Observable<Rating> {
        return this.afs.collection('ratings').doc<Rating>(`${username}_${game_title}`).valueChanges();
    }

    setRating(username : string, game_title : string, value : number) {
        //rating document data
        const rating : Rating = {username, game_title, value};

        //create unique path for each rating
        const ratingPath = `ratings/${rating.username}_${rating.game_title}`

        //return the promise after setting data in the document
        return this.afs.doc(ratingPath).set(rating);
    }

    //seperate method for deleting a rating
    deleteRating(username, game_title) {
        if (!confirm('Are you sure that you want to delete your rating for this game?')) return;
        return this.afs.doc(`ratings/${username}_${game_title}`).delete();
    }
}
