import { FirebaseService } from 'src/app/services/firebase.service';
// core and form stuff
import { NgForm } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

// rxjs stuff
import { Observable } from 'rxjs';
import { ConsoleSelectedService } from 'src/app/services/behaivor-subjects/console-selected.service';
import { GameInfoSelectedService } from 'src/app/services/behaivor-subjects/game-info-selected.service';

//ngrx stuff
import { ForumInfoSelectedService } from 'src/app/services/behaivor-subjects/forum-info-selected.service';
import { ThreadSelectedService } from 'src/app/services/behaivor-subjects/thread-selected.service';
import { Thread, ThreadMetadata } from 'src/app/models';


@Component({
  selector: 'dashboard-form',
  templateUrl: './admin-dashboard-form.component.html',
  styleUrls: ['./admin-dashboard-form.component.sass']
})
export class AdminDashboardFormComponent implements OnInit {

	@Input() dataType : "game-info" | "console" | "forum-info" | "thread";
	@Input() makerChoices : string [];
	@Input() familyChoices : string [];
	
	// these are specifically for threads
	@Input() updateData : any;
	@Input() forumFamilyChoices : Observable<any>;
	@Input() forumChoices : Observable<any>;
	@Input() prefixChoices : Observable<any>;
	@Input() typeChoices : Observable<any>;



	@Output() createEvent$ = new EventEmitter<any>();
	@Output() updateEvent$ = new EventEmitter<any>();
	@Output() deleteEvent$ = new EventEmitter<string>();

	selected : any={};
	
  constructor(
		private gameInfoSelectedService : GameInfoSelectedService,
		private videogameConsoleSelectedService : ConsoleSelectedService,		
		private forumInfoSelectedService : ForumInfoSelectedService,
		private threadSelectedService : ThreadSelectedService,		
		private firebaseService : FirebaseService
		) { }

  ngOnInit(): void {
		// changes plural "categories" to singula "category" or plural "prefixes" to singular "prefix"

		// console.log("before:")
		// console.log(this.familyChoices)
		if (this.dataType === "game-info" || this.dataType === "forum-info")  {
			this.familyChoices = this.familyChoices.map(item => {
				if  (item.endsWith("ies")) { 
					console.log("this executed with word:", item)
					return item.replace("ies","y")
				} else if (item.endsWith("es")) {
					if(item === "types") {
						return "type"
					} else {
						return item.replace("es","")
					}
				} else if (item.endsWith("s")) {
					return item.replace("s","")
				}
			});
		}


		if (this.dataType === "game-info") {
			this.gameInfoSelectedService.selected$.subscribe((data) => this.selected = data)
		} else if (this.dataType === "console") {
			this.videogameConsoleSelectedService.selected$.subscribe((data) => this.selected = data)
		}	else if (this.dataType === "forum-info") {
			this.forumInfoSelectedService.selected$.subscribe((data) => this.selected = data)
		} else if (this.dataType === "thread") {
			if (this.updateData)
				this.selected = this.updateData;
			else {
				// some thoughts while doing this...
				/* 
				vvv el bado vvv
				*/
				this.selected = new Thread('','', new ThreadMetadata('','','',''))

				// this.selected = {
				// 	id : "",
				// 	forum : "",
				// 	title : "",
				// 	creator : "",
				// 	moderator : "",
				// 	closed : false,
				// 	metadata : {},
				// 	family : "",
				// 	prefixes : "",
				// 	threadType : "",
				// 	description : "",	
				// }
			}
			// this.threadSelectedService.selected$.subscribe((data) => this.selected = data)
		}	else {
			console.error("no form update data recieved in admin-dashboard-form component")
		}
  }

	save(form : NgForm) {
		// 
		const {title, description, ...metadata} = form.value;
		metadata.creator = "bisk man flavor on!"
		if (this.selected.id) {
			metadata.updatedAt = this.firebaseService.timestamp;
			const thread = new Thread(title, description, metadata)		
			this.updateEvent$.emit({id : this.selected.id, ...thread});
		} else {
			metadata.createdAt = this.firebaseService.timestamp;
			const thread = new Thread(title, description, metadata)		
			this.createEvent$.emit(thread);
		}
		/* 
			do a hard reset, so that the form has no data displayed 
			and nothing to recall the last submit with.
		*/
		form.reset()
		this.selected = {}
		return;
	}

	reset(form : NgForm) {
		if (confirm("WARNING: reset will not delete this item, just erase the values it currrently has.\nUse the delete button to erase the object. Please confirm before proceeding...")) {
			form.reset()
		}
		return;
	}

	delete(obj : any, form : NgForm) {
		if (obj.id){
			this.deleteEvent$.emit(obj?.id)
			this.selected = {};
		} else {
			console.error("error: cannot delete object without an id");
			return;
		}
		/* Delete existing form data upon reset */
		form.reset()
		this.selected = {};
		
	}

}
