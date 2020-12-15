import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Rating } from '../models/content/rating';
import { Review } from '../models/content/Review';
import { RatingService } from '../common/services/rating.service';

@Component({
  selector: 'app-contrib-dashboard',
  templateUrl: './contrib-dashboard.component.html',
  styleUrls: ['./contrib-dashboard.component.css']
})
export class ContribDashboardComponent implements OnInit {

    user_id: any;
    username : string;
    ratings: Rating [];

    reviews: Review [];
    
    constructor(private ratingService : RatingService, private route : ActivatedRoute) {
        this.ratingService.getUserStars(localStorage.getItem("user_id")).subscribe(p => this.ratings = p);
        this.user_id = route.snapshot.paramMap.get('id');
        this.username = route.snapshot.paramMap.get('username');

    }


  ngOnInit(): void {
  }

}
