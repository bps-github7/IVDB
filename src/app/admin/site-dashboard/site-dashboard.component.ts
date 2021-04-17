import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
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
displayedColumns: string[] = ['title', 'edit', 'delete'];
chosen : any;
doc : any;


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
  
  openDialog(type : string, updateObject?: any) {

      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.data = updateObject

      // console.log(`openDialog got this: ${uid}`)

      if (type == 'news')
        this.openNewsDialog(dialogConfig)
      else if (type == 'stream')
        this.openStreamDialog(dialogConfig)
      else if (type == 'watchlist')
          this.openWatchlistDialog(dialogConfig)
  }

  openNewsDialog(config) {
    this.dialog.open(EditNewsComponent, config)
    .afterClosed()
    .subscribe(result => {
      if (result.title){
        if (result.uid) {
          //dont need action so we descruture to get the rest
          const { action, ...rest } = result;
          this.newsService.edit(rest.uid, rest);
      } else {
          console.log("tried to create doc")
          const { action, ...rest } = result;
          this.newsService.create(rest);
      }}
    
    })
  }

  openStreamDialog(config) {
     this.dialog.open(EditStreamComponent,config)
     .afterClosed()
     .subscribe(result => {
       if (result.title){
         if (result.uid) {
           //dont need action so we descruture to get the rest
           const { action, ...rest } = result;
           this.streamsService.edit(rest.uid, rest);
       } else {
           console.log("tried to create doc")
           const { action, ...rest } = result;
           this.streamsService.create(rest);
       }}
     
     })
  }

  openWatchlistDialog(config) {
    this.dialog.open(EditWatchlistComponent,config)
    .afterClosed()
    .subscribe(result => {
      if (result.title){
        if (result.uid) {
          //dont need action so we descruture to get the rest
          const { action, ...rest } = result;
          this.watchlistsService.edit(rest.uid, rest);
      } else {
          console.log("tried to create doc")
          const { action, ...rest } = result;
          this.watchlistsService.create(rest);
      }}
    
    })
  }

  deleteNews(uid) {
    if(confirm('are you sure you want to delete this news piece? (cannot be undone)'))
      this.newsService.delete(uid);
  }

  deleteStream(uid) {
    if(confirm('are you sure you want to delete this stream? (cannot be undone)'))
      this.streamsService.delete(uid);
  }

  deleteWatchlist(uid) {
    if(confirm('are you sure you want to delete this watchlist? (cannot be undone)'))
      this.watchlistsService.delete(uid);
  }

}