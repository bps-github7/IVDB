import { Component, OnInit, Input } from '@angular/core';
import { RatingService } from '../common/services/rating.service';
import { Observable, from } from 'rxjs';
import { User } from '../models/user/user';
import { StarService } from '../star.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})


export class RateComponent implements OnInit {

    @Input() userId;
    @Input() gameId;
    @Input() mode: string = "rate";

    user: any;
    stars: Observable<any>;
    avgRating: Observable<any>;

    constructor(private starsService : StarService) {
    }

    ngOnInit(): void {
        //populate the stars observable with method from our service.
        this.stars = this.starsService.getGameRating(this.gameId);

        //this doesnt work+++ unsuprisingly
        this.avgRating = this.stars.pipe(map(arr => {
            const ratings = arr.map(v => v.value)
            return ratings.length ? ratings.reduce((total, val) => total + val)  / arr.legnth : 'not reviewed';
        }))
    }

    starHandler(value) {
        this.starsService.setRating(this.userId, this.gameId, value);
    }

}
