import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from '../common/services/game.service';
import { ReviewService } from '../common/services/review.service';
import { Game } from '../models/content/Game';
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
    game : Game;

    constructor(
        private reviewService : ReviewService,
        private router : Router,
        private route : ActivatedRoute,
        private gameService : GameService) { 

            this.username = this.route.snapshot.paramMap.get("username");
        this.game_title = this.route.snapshot.paramMap.get("game_title");
        this.gameService.get$(this.game_title).subscribe((game : any) => {
            this.game = game;
        });
        this.reviewService.getGameReview(this.username, this.game_title).subscribe((review : Review) => {
            this.review = review;
        }
        )
    }

    ngOnInit(): void {
    }

}
