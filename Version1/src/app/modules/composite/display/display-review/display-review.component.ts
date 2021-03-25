import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from 'src/app/common/services/game.service';
import { ReviewService } from 'src/app/common/services/review.service';
import { Game } from 'src/app/models/content/Game';
import { Review } from 'src/app/models/content/Review';

@Component({
    selector: 'app-display-review',
    templateUrl: './display-review.component.html',
    styleUrls: ['./display-review.component.css']
})
export class DisplayReviewComponent implements OnInit {

    username: string;
    game_title: string;
    review: Review;
    game: Game;

    constructor(
        private reviewService: ReviewService,
        private router: Router,
        private route: ActivatedRoute,
        private gameService: GameService) {

        this.username = this.route.snapshot.paramMap.get("username");
        this.game_title = this.route.snapshot.paramMap.get("game_title");
        // this.gameService.get_by_title$(this.game_title).subscribe((game : any) => {
        //     this.game = game;
        // });
        this.reviewService.getGameReview(this.username, this.game_title).subscribe((review: Review) => {
            this.review = review;
        }
        )
    }

    ngOnInit(): void {
    }

}
