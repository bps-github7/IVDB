import { Component, OnInit, Input } from '@angular/core';
import { RatingService } from '../common/services/rating.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { AngularFirestoreDocument, AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})


export class RateComponent implements OnInit {

    @Input() userId;
    @Input() gameId;

    userCollection : AngularFirestoreCollection<User[]>
    users : Observable<User[][]>;
    user: any;
    id = 'J4h6JejwiHZLV3UgbaNdoREwiMs2';
    stars: Observable<any>;
    avgRating: Observable<any>;

    constructor(private rateService : RatingService, private afs : AngularFirestore) {
        // this.user = rateService.give_me_user();
        this.userCollection = this.afs.collection('users');
        this.users = this.userCollection.valueChanges();

        this.userCollection.doc(`${this.id}`).ref.get().then((doc) => {
            this.user = doc.data();
          });
    }

    ngOnInit(): void {
        //populate the stars observable with method from our service.
        // this.stars = this.rateService.getStars(this.gameId)

    }


}
