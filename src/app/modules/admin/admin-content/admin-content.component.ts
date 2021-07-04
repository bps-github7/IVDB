import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Content } from 'src/app/models/content/content.model';
import * as fromContent from 'src/app/store/reducers/content.reducer';
import * as contentActions from 'src/app/store/actions/content.actions';
import { getFamily } from 'src/app/store/selectors/content.selector';

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
		},
		review : {
			title : {
				type : "text",
				formControlName : "title",
				config : {
					placeholder : "enter a title for this review"
				}
			},
			description : {
				type : "textarea",
				formControlName : "description",
				config : {
					placeholder : "enter a short description for this review"
				}
			},
			body : {
				type : "textarea",
				formControlName : "body",
				config : {
					placeholder : "enter the body for this review"
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
		group : {
			title : {
				type : "text",
				formControlName : "title",
				config : {
					placeholder : "enter a title for this group"
				}
			},
			description : {
				type : "textarea",
				formControlName : "description",
				config : {
					placeholder : "enter a short description for this group"
				}
			},
			body : {
				type : "textarea",
				formControlName : "body",
				config : {
					placeholder : "enter the body for this group"
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
		},
		review : {
			title : [""],
			description : [""],
			body : [""],
			tags : [""],	      
		},
		group : {
			title : [""],
			description : [""],
			body : [""],
			tags : [""],	      
		}
	}



	news$ : Observable<any>;
	streams$ : Observable<any>;
	watchlists$ : Observable<any>;
	reviews$ : Observable<any>;
	groups$ : Observable<any>;


	contents : any []
	chosen : any;
	doc : any;

	constructor(private store : Store<fromContent.State>) { }

  ngOnInit(): void {
		this.store.dispatch( contentActions.readContent() )

		// get all content by category
		this.news$ = this.store.pipe(select(getFamily("news")));
		this.streams$ = this.store.pipe(select(getFamily("stream")))
		this.watchlists$ = this.store.pipe(select(getFamily("watchlist")))	
		this.reviews$ = this.store.pipe(select(getFamily("review")))
		this.groups$ = this.store.pipe(select(getFamily("group")))
		
		this.contents = [
			{
				title : "news", 
				content : this.news$,
				build : this.builds["news"],
				form : this.forms["news"]
			},
			{
				title : "streams", 
				content : this.streams$,
				build : this.builds["stream"],
				form : this.forms["stream"]
			},
			{
				title : "watchlists", 
				content : this.watchlists$,
				build : this.builds["watchlist"],
				form : this.forms["watchlist"]
			},
			{
				title : "reviews", 
				content : this.reviews$,
				build : this.builds["review"],
				form : this.forms["review"]
			},
			{
				title : "groups", 
				content : this.groups$,
				build : this.builds["group"],
				form : this.forms["group"]
			}
		];
	}
}
