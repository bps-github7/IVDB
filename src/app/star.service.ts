import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Rating } from './models/content/rating';


@Injectable({
  providedIn: 'root'
})
export class StarService {
    exists : boolean = false;;
    gamesCollection : AngularFirestoreCollection<Rating []>;
    gameDocument : AngularFirestoreDocument<Rating>;


    constructor(private afs : AngularFirestore, private router : Router) {
        this.gamesCollection = this.afs.collection('ratings');
    }

    getRatingAsPromise(userId : string, gameId :  string) : Promise<Rating> {
        /* This will allow us to get the value from observable 
        to check whether or not rating exists, in component logic.
         */
        return this.getGameRating(userId, gameId).pipe(take(1))
        .toPromise();
    }


    getUserStars(userId : string) : Observable<Rating []> {
        const ratingRef = this.afs.collection<Rating>('ratings', (ref) => ref.where('userId', '==', userId));
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
