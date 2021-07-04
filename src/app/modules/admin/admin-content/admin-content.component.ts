import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Content } from 'src/app/models/content/content.model';
import * as fromContent from 'src/app/store/reducers/content.reducer';
import * as contentActions from 'src/app/store/actions/content.actions';
import { getFamily } from 'src/app/store/selectors/content.selector';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from '../../shared/components/dialog/dialog.component';

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


	// todo: conflicted about how to deal with these. I was tempted to put them in the dialogComponent, 
	// but in order for it to stay reusable, it should accept these via input props.
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

	constructor(
		private store : Store<fromContent.State>,
		private dialog : MatDialog
		) { }

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
			},
			{
				title : "streams", 
				content : this.streams$,
			},
			{
				title : "watchlists", 
				content : this.watchlists$,
			},
			{
				title : "reviews", 
				content : this.reviews$,
			},
			{
				title : "groups", 
				content : this.groups$,
			}
		];
	}

	openDialog(actionType : string, updateObject? : { id : string, body?: Partial<Content> }) {
		switch(actionType) {
			case "CREATE":
				console.log("going to create a new piece of content");
				break;
			case "UPDATE":
				console.log(`going to update document with id == ${updateObject.id}`);
				console.log(updateObject.body)
				break;
			case "DELETE":
				console.log(`going to delete doc with id == ${updateObject.id}`);
				break;
		}
		const config = new MatDialogConfig();
		config.disableClose = true;
		config.autoFocus = true;
		config.height = '1600px';
		config.width = `1200px`;
		// would be better if open dialog knew these instructions. the class doesnt need them.
		config.data = {
			actionType,
			updateObject : (updateObject ? updateObject : null)
		};

		this.dialog.open(DialogComponent, config)
		.afterClosed()
		.subscribe(result => {
			if(result.uid) {
				// this.contentService.edit(result.);
				console.log("then we update")
			}
			else {
				console.log("then we create")
				// this.contentService.create(result);
			}
		})
	}

	
}
