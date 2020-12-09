import { Component, OnInit } from '@angular/core';
import { Rating } from '../models/content/rating';
import { Review } from '../models/content/Review';
import { StarService } from '../star.service';

@Component({
  selector: 'app-contrib-dashboard',
  templateUrl: './contrib-dashboard.component.html',
  styleUrls: ['./contrib-dashboard.component.css']
})
export class ContribDashboardComponent implements OnInit {

    ratings: Rating [];
    reviews: Review [];
    
    constructor(private starService : StarService) {
        this.starService.getUserStars(localStorage.getItem("user_id")).subscribe(p => this.ratings = p);
    }


  ngOnInit(): void {
  }

}
