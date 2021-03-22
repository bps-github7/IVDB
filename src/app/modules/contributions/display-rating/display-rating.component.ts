import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RatingService } from '../../../common/services/rating.service';
import { Rating } from '../../../models/content/rating';

//default object for filling in prior to users providing a rating...
class Star implements Rating {
    username = null;
    game_title = null;
    value = 0;
}


@Component({
  selector: 'display-rating',
  templateUrl: './display-rating.component.html',
  styleUrls: ['./display-rating.component.css']
})
export class DisplayRatingComponent implements OnInit {
    @Input() value : number;
    
    ngOnInit(): void {
    
    }


    



}