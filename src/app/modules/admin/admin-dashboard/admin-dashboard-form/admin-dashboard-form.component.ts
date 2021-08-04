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
import { Thread } from 'src/app/models';


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
					1. would be nice to create objects for threads, consoles, etc
						so we dont have to hard code a default impl like this. kind of the point of OOP.
					2. dido with metadata, we can give default values to things needed in every obj that uses metadata
						ie . creator, time published, time updated, whatever else. then pass in the values
						for things that change to the constructor.
				
				*/
				this.selected = new Thread()

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
		// TODO : this will be the tricjy part- need to make sure all the form values match with the class constructor in order of appearance.
		if (this.selected.id) {
			this.updateEvent$.emit({id : this.selected.id, ...form.value});
		} else {
			this.createEvent$.emit(form.value);
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
