import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Rating } from '../models/content/rating';
import { StarService } from '../star.service';

@Component({
  selector: 'stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
    user: any;
    stars: Rating;
    avgRating: Observable<any>;

    

    @Input() userId;
    @Input() gameId;

  constructor(private starsService : StarService) { 

  }


    ngOnInit(): void {
        /* if(!starService.rating_exists()) {
            this.starService.setRating(this.userId, this.gameId, 0)
        } */
        this.starsService.getGameRating(this.userId, this.gameId)
        .subscribe(doc => this.stars = doc);
    }

    starHandler(value) {
        this.starsService.setRating(this.userId, this.gameId, value);
    }
}
