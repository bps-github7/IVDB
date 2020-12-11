import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rating } from '../models/content/rating';
import { StarService } from '../star.service';

@Component({
  selector: 'app-view-ratings',
  templateUrl: './view-ratings.component.html',
  styleUrls: ['./view-ratings.component.css']
})
export class ViewRatingsComponent implements OnInit {

    username : string = localStorage.getItem("username");
    stars : Rating [];


    constructor(private starService : StarService, private router : Router, private route : ActivatedRoute) {
        this.starService.getUserStars(this.username).subscribe(res => {
            this.stars = res;
        });

    }
    
    ngOnInit(): void { }

}
