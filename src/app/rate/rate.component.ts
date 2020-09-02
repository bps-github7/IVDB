import { Component, OnInit } from '@angular/core';
import { StarRatingComponent } from 'ng-starrating';
import { RateService } from '../common/services/rate.service';
import { AngularFireDatabase } from '@angular/fire/database';


@Component({
  selector: 'rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {

    constructor(private rateService : RateService) { }

    ngOnInit(): void {
    }

    onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
        this.rateService.submitRating($event.newValue);
    }


}
