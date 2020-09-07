import { Component, OnInit, Input } from '@angular/core';
import { RatingService } from '../common/services/rating.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})


export class RateComponent implements OnInit {

    @Input() userId;
    @Input() gameId;

    stars: Observable<any>;
    avgRating: Observable<any>;

    constructor(private rateService : RatingService) { }

    ngOnInit(): void {
        //populate the stars observable with method from our service.
        // this.stars = this.rateService.getStars(this.gameId)

    }


}
