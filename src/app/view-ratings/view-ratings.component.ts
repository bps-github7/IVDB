import { Component, OnInit } from '@angular/core';
import { Rating } from '../models/content/rating';
import { StarService } from '../star.service';

@Component({
  selector: 'app-view-ratings',
  templateUrl: './view-ratings.component.html',
  styleUrls: ['./view-ratings.component.css']
})
export class ViewRatingsComponent implements OnInit {

    constructor() { }
    
    ngOnInit(): void { }

}
