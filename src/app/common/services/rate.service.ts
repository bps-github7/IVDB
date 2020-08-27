import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class RateService {

  constructor(private db : AngularFireDatabase) { }

    submitRating(value : number) {
        //if rating exists for this user
        
        //else create a new rating
    }

    //create a rating

    //update a rating

    //delete a rating- for admin purposes- or if user deletes their account.


}
