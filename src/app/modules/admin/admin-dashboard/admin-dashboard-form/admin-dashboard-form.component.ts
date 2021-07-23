// core and form stuff
import { NgForm } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

// rxjs stuff
import { Observable } from 'rxjs';
import { ConsoleSelectedService } from 'src/app/services/behaivor-subjects/console-selected.service';
import { GameInfoSelectedService } from 'src/app/services/behaivor-subjects/game-info-selected.service';

//ngrx stuff
import { Store } from '@ngrx/store';
import * as fromGameInfo from 'src/app/store/reducers/game-info.reducer';
import { readGameInfo } from './../../../../store/actions/game-info.actions';
import { getFamily } from 'src/app/store/selectors/game-info.selector';
import { ForumInfoSelectedService } from 'src/app/services/behaivor-subjects/forum-info-selected.service';
import { ThreadSelectedService } from 'src/app/services/behaivor-subjects/thread-selected.service';


@Component({
  selector: 'dashboard-form',
  templateUrl: './admin-dashboard-form.component.html',
  styleUrls: ['./admin-dashboard-form.component.sass']
})
export class AdminDashboardFormComponent implements OnInit {

	@Input() dataType : "game-info" | "console" | "forum-info" | "thread";
	@Input() makerChoices : Observable<any>;
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
		this.familyChoices = this.familyChoices.map(item => {
			// wanted to do this with a ternary but need else if for "es" 
			if  (item.endsWith("ies")) { 
				return item.replace("ies","y")
			} else if (item.endsWith("es")) {
				return (item === "types" ?
				 item.replace("s", "") :
				 item.replace("es",""))
			} else if (item.endsWith("s")) {
				return item.replace("s","")
			}
			
			
		});


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
