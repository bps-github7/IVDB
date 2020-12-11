import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../common/services/review.service';
import { Review } from '../models/content/Review';

@Component({
  selector: 'app-view-reviews',
  templateUrl: './view-reviews.component.html',
  styleUrls: ['./view-reviews.component.css']
})
export class ViewReviewsComponent implements OnInit {

    reviews : Review [];
    username : string = localStorage.getItem("username");

    constructor(private reviewService : ReviewService) {
        this.reviewService.getUserReviews(this.username).subscribe(res => {
            this.reviews = res; 
        })
    }

  ngOnInit(): void {
  }

}
