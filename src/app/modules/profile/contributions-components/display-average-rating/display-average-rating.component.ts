import { Component, Input, OnInit } from '@angular/core';
import { RatingService } from 'src/app/common/services/rating.service';

@Component({
  selector: 'display-average-rating',
  templateUrl: './display-average-rating.component.html',
  styleUrls: ['./display-average-rating.component.css']
})
export class DisplayAverageRatingComponent implements OnInit {

    @Input() game_title;
    game_stars : any;
    avg_rating : any = 3;

    constructor(private ratingService : RatingService) { }

    ngOnInit(): void {
        // this.ratingService.getAll$(this.game_title).subscribe(arr => {
        //     //nesc because getAll returns an array. probably a better way to do this
        //     // once we start using ngrx.
        //     this.avg_rating = Object.keys(arr).map(game_ratings => {
        //         return arr[game_ratings]
        //     });            
        // });

        //this getAll$ method is not working. not sure why, it written like everything else
        //we have that deals with observables except gameInfo (tried that approach too)
        this.ratingService.getAll$(this.game_title).subscribe((rating) => {
            this.game_stars =  rating;
        });
        
        this.avg_rating = this.game_stars.map(arr => {
            const rating = arr.map(v => v.value);
            return rating.length ? rating.reduce((total, value) => total + value) / arr.length : 'no ratings for this game yet';
        })        
    }



}
