import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AuthService } from './auth.service';
import { take } from 'rxjs/operators';
import { Rating } from 'src/app/models/rating';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class RateService {
    data;

    constructor(private db : AngularFireDatabase, private auth : AuthService) {
        this.data = firebase.database().ref('/ratings');
    }

    async checkUser() {
        const user = await this.auth.isLoggedIn();
        return user ? true : false;
    }

    submitRating(value : number) {
        console.log(this.auth.user$.subscribe((user) => {console.log(user.uid)}))
    }
    
    //create a ratingId
    create(rating) {
        //if user is logged in, has not rated this game
        // if (this.checkUser) {
        //     this.data.once('value', (snapshot) => {
        //         this.data.order_by_child('userId').equalTo(user)
        //     })
        return this.db.list('/ratings').push(rating);
    }

    //update a rating
    update(ratingId, rating) {
        return this.db.object('/ratings/' + ratingId).update(rating);
    }
 
    //delete a rating- for admin purposes- or if user deletes their account. 
    delete(rating) {
        this.db.object('/ratings/' + rating).remove();
    }

    //get a rating observable from the db
    // get(rating) : Observable<Rating>{
    //      return this.db.object<Rating>('/ratings/'+rating).valueChanges().pipe(take(1));
    // }


    // get(user, game) {
    //     if (this.checkUser()){
            
    //     }
    // }


}
