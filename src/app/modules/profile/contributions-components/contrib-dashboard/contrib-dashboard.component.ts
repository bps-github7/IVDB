import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Rating } from '../../../../models/content/rating';
import { Review } from '../../../../models/content/Review';
import { RatingService } from '../../../../common/services/rating.service';
import { ReviewService } from '../../../../common/services/review.service';

@Component({
  selector: 'app-contrib-dashboard',
  templateUrl: './contrib-dashboard.component.html',
  styleUrls: ['./contrib-dashboard.component.css']
})
export class ContribDashboardComponent implements OnInit {
    /* 
        Allows a user to view and make changes to site contributions

        They can view ratings, reviews, comments, threads and replies.
    
        They can edit or delete any active content from here.

        NOTE: this component must be protected by 2 authenticators-
        1) User must be signed in
        2) Only the user owning the account can view their contrib dashboard.
        
        WARNING: without this, there will be serious security and privacy deficits. 
    */
    user_id: any;
    username : string;
    ratings: Rating [];
    reviews: Review [];
    // comments: Comment [];
    // threads: Thread [];
    // replies: Reply [];
    
    constructor(
        private ratingService : RatingService,
        private reviewService : ReviewService,
        private route : ActivatedRoute
        ) {
        
        // Very confusing how you have two names for the same value!! user_id is older version of username
        // console.log("Wrong user id? here it is: " + this.user_id);

        // this.user_id = route.snapshot.paramMap.get('user_id');
        this.username = route.snapshot.paramMap.get('username');
        this.ratingService.getUserStars(this.username).subscribe(p => this.ratings = p);
        this.reviewService.getUserReviews(this.username).subscribe(p => this.reviews = p);
    }


  ngOnInit(): void {
  }

}
