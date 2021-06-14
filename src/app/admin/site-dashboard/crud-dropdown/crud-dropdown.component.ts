import { ContentService } from './../../../services/content.service';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FirebaseService } from 'src/app/services/firebase.service';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { Content } from 'src/app/models/content/content';
import { AuthService } from 'src/app/core/auth.service';
import { User } from 'src/app/models/user/user';

@Component({
  selector: 'crud-dropdown',
  templateUrl: './crud-dropdown.component.html',
  styleUrls: ['./crud-dropdown.component.css']
})
export class CrudDropdownComponent implements OnInit {


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
		streams : {
			title : {
				type : "text",
				formControlName : "title",
				config : {
					placeholder : "enter a title for this stream"
				}
			},
			description : {
				type : "textarea",
				formControlName : "description",
				config : {
					placeholder : "enter a short description"
				}
			},
			body : {
				type : "textarea",
				formControlName : "body",
				config : {
					placeholder : "enter the body for this stream"
				}
			},
			tags : {
				type : "multiple select",
				formControlName : "tags",
				options : ["games", "recent release", "aniversery"],
				config : {
					placeholder : "add tags for stream"
				}
			}    
		},
		watchlists : {  
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
		reviews : {
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
					placeholder : "add tags for this review"
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
		streams : {
			title : [""],
			description : [""],
			body : [""],
			tags : [""]
		},
		watchlists : {
			title : [""],
			description : [""],
			body : [""],
			tags : [""],	      
		},
		reviews : {
			title : [""],
			description : [""],
			body : [""],
			tags : [""],	      
		}
	}
	
	@Input() contentType : string;
	content$ : Content [];
	showContent : boolean = false;
	currentUser: Promise<String>;

	displayedColumns: string[] = ['title', 'edit', 'delete'];
	tableConfig : any;

  constructor(
		private contentService : ContentService,
		private dialog : MatDialog,
    private firebaseService: FirebaseService,
		private authService : AuthService
	) {
		this.tableConfig = {title : `Recently Uploaded ${this.contentType}`, displayedColumns : this.displayedColumns, type : this.contentType}

		
	}

  ngOnInit(): void {
		this.contentService.getCategory$(this.contentType).subscribe(data => this.content$ = data);
	}

	
  
  openDialog(type : string, updateObject?: any) {

		// BIG NOTE: this only works if the data between contents stays the same... which it wont.
		const config = new MatDialogConfig();
		
		config.disableClose = true;
		config.autoFocus = true;
		config.height = '1600px';
		config.width = `1200px`;

		config.data = {
			buildInfo : {
				initialState: this.forms[type],
				build : this.builds[type],    
			},
			updateObject : (updateObject?
				{
					title : updateObject.title,
					description : updateObject.description, 
					body : updateObject.body,
					tags : updateObject.metadata.tags
				}
				: null)
		};

		this.dialog.open(DialogComponent, config)
		.afterClosed()
		.subscribe(result => {
			if (result) {

				// if the object returned by dialog has UID, then it is being updated.
				if(result.uid) {

					// store an update timestamp

					// detect new contributors
					
					this.contentService.edit(result.uid, result);
				}
				else {
					// then we are going to make a new piece of content!
					result.metadata = {
						createdAt : this.firebaseService.timestamp,
						creator : localStorage.getItem("username"),
						category : type,
						tags: result.tags,				
					};
					//dont need this since its stored in metadata now
					delete result.tags;
					this.contentService.create(result);
				}
			}
			
		})
	}

	deleteContent(uid : string) {
		if(confirm('are you sure you want to delete this piece of content? (cannot be undone)')){
      // this.newsService.deleteAssociatedStorage(uid);
      this.contentService.delete(uid);
    }	
	}


}