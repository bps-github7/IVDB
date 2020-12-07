import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StarService } from '../star.service';

@Component({
  selector: 'stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
    user: any;
    stars: Observable<any>;
    avgRating: Observable<any>;


    @Input() userId;
    @Input() gameId;

  constructor(private starsService : StarService) { }



    ngOnInit(): void {
        this.stars = this.starsService.getGameRating(this.gameId);
    }

    starHandler(value) {
        this.starsService.setRating(this.userId, this.gameId, value);
    }
}
