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
    if(!this.starsService.rating_exists(this.userId, this.gameId)) {
        this.starsService.setRating(this.userId, this.gameId, 0)
    }
    this.starsService.getGameRating(this.userId, this.gameId)
    .subscribe(doc => this.stars = doc);

  }


    ngOnInit(): void {
      }

    starHandler(value) {
        this.starsService.setRating(this.userId, this.gameId, value);
    }
}
