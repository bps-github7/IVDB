import { DialogComponent } from './../../shared/components/dialog/dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditStreamComponent } from '../forms/edit-stream/edit-stream.component';
import { EditWatchlistComponent } from '../forms/edit-watchlist/edit-watchlist.component';
import { Content } from 'src/app/models/content/content';
import { StreamsService } from './../../services/streams.service';
import { NewsService } from './../../services/news.service';
import { EditNewsComponent } from './../forms/edit-news/edit-news.component';
import { WatchlistsService } from 'src/app/services/watchlists.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { AngularFireStorage } from '@angular/fire/storage';



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

newsConfig = {title : "Recently Uploaded Streams", displayedColumns : this.displayedColumns, type : "news"}
streamConfig = {title : "Recently Uploaded Streams", displayedColumns : this.displayedColumns, type : "stream"}
watchlistConfig = {title : "Recently Uploaded Streams", displayedColumns : this.displayedColumns, type : "watchlist"}





constructor(
    private dialog : MatDialog,
    private firebaseService: FirebaseService,

    private storage : AngularFireStorage,

    private newsService : NewsService,
    private streamsService : StreamsService,
    private watchlistsService : WatchlistsService,
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
      dialogConfig.height = '1600px';
      dialogConfig.width = `1200px`;
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
          rest.updatedAt = this.firebaseService.timestamp;
          const { urlsToDelete, ...news } = rest
          this.newsService.edit(news.uid, news);
          if (urlsToDelete) {
            console.log("going to delete for cleanup:")
            console.log(urlsToDelete)
            const urls = urlsToDelete;
            for (let i = 0; i < urls.length; i++)
              this.storage.storage.refFromURL(urls[i]).delete();
          }
      } else {
          console.log("tried to create doc")
          const { action, ...rest } = result;
          rest.createdAt = this.firebaseService.timestamp;
          const { urlsToDelete, ...news } = rest;
          this.newsService.create(news);
          console.log("going to delete for cleanup:")
          console.log(urlsToDelete)
          if (urlsToDelete) {
            const urls = urlsToDelete;
            for (let i = 0; i < urls.length; i++)
              this.storage.storage.refFromURL(urls[i]).delete();
          }
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
           rest.updatedAt = this.firebaseService.timestamp
           this.streamsService.edit(rest.uid, rest);
           if (rest.urlsToDelete) {
            const urls = rest.urlsToDelete
            for (let i = 0; i < urls; i++)
              this.storage.storage.refFromURL(urls[i]).delete;
          }
       } else {
           console.log("tried to create doc")
           const { action, ...rest } = result;
           rest.createdAt = this.firebaseService.timestamp
           this.streamsService.create(rest);
           if (rest.urlsToDelete) {
            const urls = rest.urlsToDelete
            for (let i = 0; i < urls; i++)
              this.storage.storage.refFromURL(urls[i]).delete;
          }
       }}
     
     })
  }

  openWatchlistDialog(config) {
    config.data = {
      initialState: {
        title : [""],
        description : [""],
        body : [""],
        //this needs to be formArray, but we are aboiding DI into the parent component until we deterime better place to inject this data
        tags : [""],
        // titleCardImage : [""],
        // images : [""]
      },
      buildInfo : {
        title : {
          type : "text",
          formControlName : "title",
          config : {
            placeholder : "enter a title for this watchlist"
          }
        },
        description : {
          type : "textarea",
          formControlName : "description",
          config : {
            placeholder : "enter a short description for this watchlist"
          }
        },
        body : {
          type : "textarea",
          formControlName : "body",
          config : {
            placeholder : "enter the body for this watchlist"
          }
        },
        tags : {
          type : "multiple select",
          formControlName : "tags",
          options : ["games", "recent release", "aniversery"],
          config : {
            placeholder : "add tags for this watchlist"
          }
        }
      }    
    }
    this.dialog.open(DialogComponent, config)
    .afterClosed()
    .subscribe(result => {
      // if watchlist exists already
      // edit it
      this.watchlistsService.create(result);
    })
  }

  deleteNews(uid) {
    if(confirm('are you sure you want to delete this news piece? (cannot be undone)')){
      this.newsService.deleteAssociatedStorage(uid);
      this.newsService.delete(uid);
    }
  }

  deleteStream(uid) {
    if(confirm('are you sure you want to delete this stream? (cannot be undone)')){
      this.streamsService.delete(uid);
    }
  }

  deleteWatchlist(uid) {
    if(confirm('are you sure you want to delete this watchlist? (cannot be undone)')) {
      this.watchlistsService.delete(uid);
    }
  }

  // buildInfo = {
  //   first : {
  //     type : "text",
  //     formControlName : "first",
  //     config : {
  //       placeholder : "enter your first name"
  //     }
  //   },
  //   last : {
  //     type : "text",
  //     formControlName : "last",
  //     config : {
  //       placeholder : "enter your last name"
  //     }
  //   }
  // }
  // initialState = {
  //   first : [""],
  //   last : [""],
  //  };
  // returned : any;
  
  // constructor(private router : Router,
  //   private dialog : MatDialog,
  //   private fb: FormBuilder) {
  //   let returnUrl = localStorage.getItem('returnUrl');
  //   this.router.navigateByUrl(returnUrl);
  // }  

  // openDialog() {
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.disableClose = true;
  //   dialogConfig.autoFocus = true;
  //   dialogConfig.height = '1600px';
  //   dialogConfig.width = `1200px`;
  //   dialogConfig.data = {
  //     buildInfo : this.buildInfo,
  //     initialState:  this.initialState
  //   }
    
  //   this.dialog.open(DialogComponent, dialogConfig)
  //   .afterClosed()
  //   .subscribe(result => {
  //     this.returned = result;
  //     console.log(result);
  //   })
  // }


}
