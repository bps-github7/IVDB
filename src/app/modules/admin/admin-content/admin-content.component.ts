
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Content } from 'src/app/models/content/content.model';
import * as fromContent from 'src/app/store/reducers/content.reducer';
import * as contentActions from 'src/app/store/actions/content.actions';
import { selectContentFamily } from 'src/app/store/selectors/content.selector';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from '../../shared/components/dialog/dialog.component';
import { v4 } from 'uuid';
import { FirebaseService } from 'src/app/services/firebase.service';

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

	//provides instructions for building dialog for a paticular type of content
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
	
	// these are slices of the store and conglomerate array
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
		private dialog : MatDialog,
		private fb : FirebaseService
		) { }

  ngOnInit(): void {
		this.store.dispatch( contentActions.readContent() )

		// get all content by category
		this.news$ = this.store.pipe(select(selectContentFamily("news")));
		this.streams$ = this.store.pipe(select(selectContentFamily("stream")))
		this.watchlists$ = this.store.pipe(select(selectContentFamily("watchlist")))	
		this.reviews$ = this.store.pipe(select(selectContentFamily("review")))
		this.groups$ = this.store.pipe(select(selectContentFamily("group")))
		
		//think we can write this in less lines of code
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

	createDialog(contentType : string) {
		// remove s from end because thats incorrect for all except "news"
		if (contentType.endsWith("s") && contentType !== "news")
			contentType = contentType.slice(0,-1)

		const config = new MatDialogConfig();
		config.disableClose = true;
		config.autoFocus = true;
		config.height = '1600px';
		config.width = `1200px`;

		config.data = {
			buildInfo : this.builds[contentType],
			form : this.forms[contentType],
			contentType
		};

		this.dialog.open(DialogComponent, config)
		.afterClosed()
		.subscribe((returned) => {
			const content = { 
				id : v4(),
				title : returned.title,
				description : returned.description,
				body : returned.body,
				metadata : {
					createdAt : this.fb.timestamp,
					creator : "get this from auth module when its created",
					family : contentType,
					tags : returned.tags
				}		
			}
			this.store.dispatch( contentActions.createContent(content))
		})
		// lets put error handling here
		// .catchError((err) => console.log("error while creating doc"))
	}

	updateDialog(contentType : string, updateObject : Partial<Content>) {
		// console.log(`we are gonna make a update to a ${actionType} type document`);
		// console.log("here is the existing data:");
		// console.log(updateObject);
		if (contentType.endsWith("s") && contentType !== "news")
			contentType = contentType.slice(0,-1)

		const config = new MatDialogConfig();
		config.disableClose = true;
		config.autoFocus = true;
		config.height = '1600px';
		config.width = `1200px`;

		config.data = {
			buildInfo : this.builds[contentType],
			form : this.forms[contentType],
			updateObject
		};

		this.dialog.open(DialogComponent, config)
		.afterClosed()
		.subscribe((returned) => {
			const content = { 
				id : returned.id,
				title : returned.title,
				description : returned.description,
				body : returned.body,
				metadata : {
					createdAt : returned.metadata.createdAt,
					updatedAt : this.fb.timestamp,
					creator : returned.metadata.creator,
					family : returned.metadata.family,
					tags : returned.tags
				}		
			}
			this.store.dispatch( contentActions.updateContent({id : content.id, data : content}))
		})
		// lets put error handling here


	}

	deleteContent(id) {
		if(confirm("Are you sure you want to delete this piece of content?\n(warning: cannot be undone)"))
			this.store.dispatch( contentActions.deleteContent(id))
		return;
	}
	
}
