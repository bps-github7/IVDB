import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReviewService } from '../../services/review.service';
import { Review } from '../../models/content/Review';

@Component({
  selector: 'app-view-reviews',
  templateUrl: './view-reviews.component.html',
  styleUrls: ['./view-reviews.component.css']
})
export class ViewReviewsComponent implements OnInit {

    reviews : Review [];
    username : string = localStorage.getItem("username");
    // username : string;

    constructor(private reviewService : ReviewService, private route: ActivatedRoute) {
        // We should use this instead but its causing a strange bug because of spaces in username...
        // this.username = this.route.snapshot.paramMap.get("username");
        
        this.reviewService.getUserReviews(this.username).subscribe(res => {
            this.reviews = res; 
        })
    }

  ngOnInit(): void {
  }

}
