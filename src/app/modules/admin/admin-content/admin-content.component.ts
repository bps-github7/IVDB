import { Component, OnInit } from '@angular/core';
import { Content } from 'src/app/models/content/content.model';

@Component({
  selector: 'app-admin-content',
  templateUrl: './admin-content.component.html',
  styleUrls: ['./admin-content.component.sass']
})
export class AdminContentComponent implements OnInit {

/* Will talk to the content and contrib services, 
which facilitiate acess to respectively:
content: news, streams, recently-posted, watchlists
contrib: ratings, reviews, comments, posts, suggestions
*/





news$ : Content [];
streams$ : Content [];
watchlists$ : Content [];
officialReviews$ : Content [];

chosen : any;
doc : any;

options = ["news","streams","watchlists","reviews"];


	constructor() { }

  ngOnInit(): void {
  }

}
