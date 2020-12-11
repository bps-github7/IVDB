import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReviewService } from '../common/services/review.service';
import { Review } from '../models/content/Review';

@Component({
  selector: 'app-display-review',
  templateUrl: './display-review.component.html',
  styleUrls: ['./display-review.component.css']
})
export class DisplayReviewComponent implements OnInit {

    username: string;
    game_title: string;
    review : Review;

    constructor(
        private reviewService : ReviewService,
        private router : Router,
        private route : ActivatedRoute) { 
        this.username = this.route.snapshot.paramMap.get("username");
        this.game_title = this.route.snapshot.paramMap.get("game_title");
        this.reviewService.getGameReview(this.username, this.game_title).subscribe(res => {
            this.review = res;
        }
        )
    }

    ngOnInit(): void {
    }

}
