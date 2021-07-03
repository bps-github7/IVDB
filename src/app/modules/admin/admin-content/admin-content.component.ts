import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Content } from 'src/app/models/content/content.model';
import * as fromContent from 'src/app/store/reducers/content.reducer'
import { getFamily } from 'src/app/store/selectors/content.selector'

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


	displayedColumns: string[] = ['title', 'edit', 'delete'];

	tableConfig = {
		newsConfig : {title : "Recently Uploaded Streams", displayedColumns : this.displayedColumns, type : "news"},
		streamConfig : {title : "Recently Uploaded Streams", displayedColumns : this.displayedColumns, type : "stream"},
		watchlistConfig : {title : "Recently Uploaded Streams", displayedColumns : this.displayedColumns, type : "watchlist"}	
	}

	// The configs we need to build dialogs dynamically. These will change over time but are identical as this is a build mode prototype
	builds = {
		news : {
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
		},
		stream : {
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
		},
		watchlist : {  
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
	forms = {
		// These will be unique values. in time.
		news : {
			title : [""],
			description : [""],
			body : [""],
			tags : [""]
		},
		stream : {
			title : [""],
			description : [""],
			body : [""],
			tags : [""]
		},
		watchlist : {
			title : [""],
			description : [""],
			body : [""],
			tags : [""],	      
		}
	}




	news$ : Content [];
	streams$ : Content [];
	watchlists$ : Content [];
	officialReviews$ : Content [];

	chosen : any;
	doc : any;

	// options = ["news","streams","watchlists","reviews"];
	options = ["news", "streams", "watchlists"]

	constructor(private store : Store<fromContent.State>) { }

  ngOnInit(): void {
  }


	getStoreSlice(type) {
		switch (type) {
			case "news" :
				console.log("then we get news")
				return this.store.pipe(select(getFamily("news")))
			case "stream" :
				console.log("then we get streams")
				return this.store.pipe(select(getFamily("stream")))
			case "watchlist" :
				console.log("then we get watchlists")
				return this.store.pipe(select(getFamily("watchlist")))
			case "review" :
				console.log("then we get review")
				return this.store.pipe(select(getFamily("review")))
			case "group" :
				console.log("then we get groups")
				return this.store.pipe(select(getFamily("review")))
		}
	}
}
