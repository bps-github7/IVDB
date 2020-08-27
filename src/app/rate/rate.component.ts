import { Component, OnInit } from '@angular/core';
import { StarRatingComponent } from 'ng-starrating';
import { RateService } from '../common/services/rate.service';


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
        // this.rateService.submitRating();
    //     alert(`Old Value:${$event.oldValue}, 
    //       New Value: ${$event.newValue}, 
    //       Checked Color: ${$event.starRating.checkedcolor}, 
    //       Unchecked Color: ${$event.starRating.uncheckedcolor}`);
    }


    }
