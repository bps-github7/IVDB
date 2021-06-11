import { ContentService } from './../../services/content.service';
import { Component, OnInit } from '@angular/core';
import { Content } from 'src/app/models/content/content';



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
officialReviews$ : Content [];

chosen : any;
doc : any;

options = ["news","streams","watchlists","reviews"];


	constructor() { }

  ngOnInit(): void {
  }
     

  // openNewsDialog(config) {
  //   this.dialog.open(EditNewsComponent, config)
  //   .afterClosed()
  //   .subscribe(result => {
  //     if (result.title){
  //       if (result.uid) {
  //         //dont need action so we descruture to get the rest
  //         const { action, ...rest } = result;
  //         rest.updatedAt = this.firebaseService.timestamp;
  //         const { urlsToDelete, ...news } = rest
  //         this.newsService.edit(news.uid, news);
  //         if (urlsToDelete) {
  //           console.log("going to delete for cleanup:")
  //           console.log(urlsToDelete)
  //           const urls = urlsToDelete;
  //           for (let i = 0; i < urls.length; i++)
  //             this.storage.storage.refFromURL(urls[i]).delete();
  //         }
  //     } else {
  //         console.log("tried to create doc")
  //         const { action, ...rest } = result;
  //         rest.createdAt = this.firebaseService.timestamp;
  //         const { urlsToDelete, ...news } = rest;
  //         this.newsService.create(news);
  //         console.log("going to delete for cleanup:")
  //         console.log(urlsToDelete)
  //         if (urlsToDelete) {
  //           const urls = urlsToDelete;
  //           for (let i = 0; i < urls.length; i++)
  //             this.storage.storage.refFromURL(urls[i]).delete();
  //         }
  //     }}
    
  //   })
  // }


  // openStreamDialog(config) {
  //    this.dialog.open(EditStreamComponent,config)
  //    .afterClosed()
  //    .subscribe(result => {
  //      if (result.title){
  //        if (result.uid) {
  //          //dont need action so we descruture to get the rest
  //          const { action, ...rest } = result;
  //          rest.updatedAt = this.firebaseService.timestamp
  //          this.streamsService.edit(rest.uid, rest);
  //          if (rest.urlsToDelete) {
  //           const urls = rest.urlsToDelete
  //           for (let i = 0; i < urls; i++)
  //             this.storage.storage.refFromURL(urls[i]).delete;
  //         }
  //      } else {
  //          console.log("tried to create doc")
  //          const { action, ...rest } = result;
  //          rest.createdAt = this.firebaseService.timestamp
  //          this.streamsService.create(rest);
  //          if (rest.urlsToDelete) {
  //           const urls = rest.urlsToDelete
  //           for (let i = 0; i < urls; i++)
  //             this.storage.storage.refFromURL(urls[i]).delete;
  //         }
  //      }}
     
  //    })
  // }

  // openWatchlistDialog(config) {
  //   config.data = {
    
  //   initialState: this.forms.watchlist,
  //   buildInfo : this.builds.watchlist    
  //   }
  //   this.dialog.open(DialogComponent, config)
  //   .afterClosed()
  //   .subscribe(result => {
  //     // if watchlist exists already
  //     // edit it
  //     this.watchlistsService.create(result);
  //   })
  // }

  // deleteNews(uid) {
  //   if(confirm('are you sure you want to delete this news piece? (cannot be undone)')){
  //     // this.newsService.deleteAssociatedStorage(uid);
  //     this.newsService.delete(uid);
  //   }
  // }

  // deleteStream(uid) {
  //   if(confirm('are you sure you want to delete this stream? (cannot be undone)')){
  //     this.streamsService.delete(uid);
  //   }
  // }

  // deleteWatchlist(uid) {
  //   if(confirm('are you sure you want to delete this watchlist? (cannot be undone)')) {
  //     this.watchlistsService.delete(uid);
  //   }
  // }
}
