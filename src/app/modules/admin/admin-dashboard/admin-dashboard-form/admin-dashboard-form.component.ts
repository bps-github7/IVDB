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


@Component({
  selector: 'dashboard-form',
  templateUrl: './admin-dashboard-form.component.html',
  styleUrls: ['./admin-dashboard-form.component.sass']
})
export class AdminDashboardFormComponent implements OnInit {

	@Input() dataType : "game-info" | "console" | "forum-info" | "thread";
	@Input() makerChoices : string [];
	@Input() familyChoices : string [];

	@Output() createEvent$ = new EventEmitter<any>();
	@Output() updateEvent$ = new EventEmitter<any>();
	@Output() deleteEvent$ = new EventEmitter<string>();
;
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
		this.familyChoices = this.familyChoices.map(item => this.depluralizer(item));
		console.log("after depluralizer:")
		console.log(this.familyChoices);


		if (this.dataType === "game-info") {
			this.gameInfoSelectedService.selected$.subscribe((data) => this.selected = data)
		} else if (this.dataType === "console") {
			this.videogameConsoleSelectedService.selected$.subscribe((data) => this.selected = data)
		}	else if (this.dataType === "forum-info") {
			this.forumInfoSelectedService.selected$.subscribe((data) => this.selected = data)
		} else if (this.dataType === "thread") {
			this.threadSelectedService.selected$.subscribe((data) => this.selected = data)
		}	else {
			console.error("no form update data recieved in admin-dashboard-form component")
		}
  }

	depluralizer(word) {
		// simple fn for turning a word in our lexicon from plural to singular.
		if  (word.endsWith("ies")) { 
			return word.replace("ies","y")
		} else if (word.endsWith("es")) {
			if(word === "types") {
				return "type"
			} else {
				return word.replace("es","")
			}
		} else if (word.endsWith("s")) {
			return word.replace("s","")
		}
	}

	save(form : NgForm) {
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
