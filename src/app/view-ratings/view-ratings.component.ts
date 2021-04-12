import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rating } from '../models/content/rating';
import { RatingService } from '../common/services/rating.service';

@Component({
  selector: 'app-view-ratings',
  templateUrl: './view-ratings.component.html',
  styleUrls: ['./view-ratings.component.css']
})
export class ViewRatingsComponent implements OnInit {

    username : string = localStorage.getItem("username");
    stars : Rating [];


    constructor(private ratingService : RatingService, private router : Router, private route : ActivatedRoute) {
        this.ratingService.getUserStars(this.username).subscribe(res => {
            this.stars = res;
        });

    }
    
    ngOnInit(): void { }

    deleteRating(username :  string, game_title : string) {
        /* Event handler for allowing users to delete a rating.
         */
        this.ratingService.deleteRating(username, game_title)
    }

}
