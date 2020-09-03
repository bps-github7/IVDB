import { Component, OnInit, Input } from '@angular/core';
import { StarRatingComponent } from 'ng-starrating';
import { RateService } from '../common/services/rate.service';
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

    constructor(private rateService : RateService) { }

    ngOnInit(): void {
        //populate the stars observable with method from our service.
        this.stars = this.rateService.getStars(this.gameId)

    }

    onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
        this.rateService.submitRating($event.newValue);
    }


}
