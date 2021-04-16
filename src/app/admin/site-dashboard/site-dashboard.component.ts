import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditStreamComponent } from '../forms/edit-stream/edit-stream.component';
import { EditWatchlistComponent } from '../forms/edit-watchlist/edit-watchlist.component';
import { Content } from 'src/app/models/content/content';
import { StreamsService } from './../../services/streams.service';
import { NewsService } from './../../services/news.service';
import { EditNewsComponent } from './../forms/edit-news/edit-news.component';
import { WatchlistsService } from 'src/app/services/watchlists.service';



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


news$ : Content [];
streams$ : Content [];
watchlists$ : Content [];

showNews : boolean = false;
showStreams : boolean = false;
showWatchlists : boolean = false;

chosen : any;

constructor(
    private dialog : MatDialog,
    private newsService : NewsService,
    private streamsService : StreamsService,
    private watchlistsService : WatchlistsService
    ) {
        this.newsService.getAll$().subscribe((response) => this.news$ = response );  
        this.streamsService.getAll$().subscribe((response) => this.streams$ = response);
        this.watchlistsService.getAll$().subscribe((response) => this.watchlists$ = response);

        
     }

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
