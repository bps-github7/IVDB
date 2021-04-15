import { EditNewsComponent } from './../forms/edit-news/edit-news.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditStreamComponent } from '../forms/edit-stream/edit-stream.component';
import { EditWatchlistComponent } from '../forms/edit-watchlist/edit-watchlist.component';

@Component({
  selector: 'app-site-dashboard',
  templateUrl: './site-dashboard.component.html',
  styleUrls: ['./site-dashboard.component.css']
})
export class SiteDashboardComponent implements OnInit {

/* Will talk to the content and contrib services, 
which facilitiate acess to respectively:
content: news, streams, recently-posted, watchlists
contrib: ratings, reviews, comments, posts, suggestions
 */

chosen : any;
  constructor(private dialog : MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(type : string) {
      if (type == 'news') 
        this.dialog.open(EditNewsComponent)
        .afterClosed()
        .subscribe(result => {
            console.log(result)
        });
      else if (type == 'stream')
        this.dialog.open(EditStreamComponent)
        .afterClosed()
        .subscribe(result => console.log(result))
    else if (type == 'watchlist')
        this.dialog.open(EditWatchlistComponent)
        .afterClosed()
        .subscribe(result => console.log(result))

  }

}
