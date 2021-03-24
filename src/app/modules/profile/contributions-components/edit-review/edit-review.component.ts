import { NullTemplateVisitor } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReviewService } from 'src/app/common/services/review.service';
import { Review } from 'src/app/models/content/Review';

class Game_Review implements Review {
    username = null;
    game_title = null;
}



@Component({
  selector: 'app-edit-review',
  templateUrl: './edit-review.component.html',
  styleUrls: ['./edit-review.component.css']
})
export class EditReviewComponent implements OnInit {
    // TODO : fix- such a crummy way of doing things
    username : string = localStorage.getItem("username");
    user_id : string = localStorage.getItem("user_id");
    warning_flag : boolean = false;
    game_title: string;
    game_review: Review;

  constructor(private reviewService : ReviewService,
    private router : Router, private route : ActivatedRoute) {
        this.game_title = this.route.snapshot.paramMap.get("game_title");
    }

  ngOnInit(): void {
    
    this.reviewService.getReviewAsPromise(this.username, this.game_title).then((review : Review) => {
        if(review) {
            this.game_review = review;
            this.warning_flag = true;
        } else {
            this.game_review = new Game_Review();
        }
    }).catch((err) => {
        console.log("error when creating review: " + err);
    })
  }

    reviewHandler(review : Review) {
        review.username = this.username;
        review.game_title = this.game_title;
        this.reviewService.setReviewHandler(review)
        .then(() => this.router.navigate(['contrib-dashboard', localStorage.getItem("user_id"), this.username ]))
        .catch((err) => console.log("error while trying to save review"));
  }

    delete() {
        this.reviewService.deleteReview(this.username, this.game_title).then(() => {
            this.router.navigate(['contrib-dashboard', localStorage.getItem("user_id"), this.username ]);
        });
  }

}
