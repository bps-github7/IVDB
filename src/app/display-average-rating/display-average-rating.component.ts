import { Component, Input, OnInit } from '@angular/core';
import { RatingService } from '../common/services/rating.service';

@Component({
  selector: 'app-display-average-rating',
  templateUrl: './display-average-rating.component.html',
  styleUrls: ['./display-average-rating.component.css']
})
export class DisplayAverageRatingComponent implements OnInit {

    @Input() game_title;
    game_stars : any;
    avg_rating : any;

    constructor(private ratingService : RatingService) { }

    ngOnInit(): void {
        this.ratingService.getAll$(this.game_title).subscribe((rating) => {
            this.game_stars =  rating;
        });
        this.avg_rating = this.game_stars.map(arr => {
            const rating = arr.map(v => v.value);
            return rating.length ? rating.reduce((total, value) => total + value) / arr.length : 'no ratings for this game yet';
        })        
    }



}
