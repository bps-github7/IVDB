import { ThreadSelectedService } from './../../../../services/behaivor-subjects/thread-selected.service';
import { ForumInfoSelectedService } from './../../../../services/behaivor-subjects/forum-info-selected.service';
import { ConsoleSelectedService } from './../../../../services/behaivor-subjects/console-selected.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { GameInfoSelectedService } from 'src/app/services/behaivor-subjects/game-info-selected.service';

@Component({
  selector: 'table-manager',
  templateUrl: './admin-dashboard-table-manager.component.html',
  styleUrls: ['./admin-dashboard-table-manager.component.sass']
})
export class AdminDashboardTableManagerComponent implements OnInit {

	@Input() dataType : string = "game-info";
	@Input() tables : {title : Observable<any>};
	@Input() familyChoices : string [];
	@Input() makerChoices : string [];

	@Output() createEvent$ = new EventEmitter<any>();
	@Output() updateEvent$ = new EventEmitter<any>();
	@Output() deleteEvent$ = new EventEmitter<any>();

	choices : string [];
	chosen : string;
	showForm : boolean = false;

	constructor(
		private gameInfoSelectedService : GameInfoSelectedService,
		private videogameConsoleSelectedService : ConsoleSelectedService,
		private forumInfoSelectedService : ForumInfoSelectedService,
		private threadSelectedService : ThreadSelectedService
		) { }

  ngOnInit(): void {
		// if tables input prop was passed in, populate 'choices' with the key of each table object (its title)
		this.choices = this.tables ? Object.keys(this.tables)  : null;
	}

	createFromForm(obj : any={}) {
		this.createEvent$.emit(obj);
	}

	updateFromForm(obj : any={}) {
		this.updateEvent$.emit(obj);
	}

	deleteFromForm(id : string) {
		// should we ask user to confirm here? or deeper / shallower? 
		//NOTE that this component is in between emiter and action dispatcher
		this.deleteEvent$.emit(id);
	}


	createFromTable() {
		/* 
			it would be nice to open the zippy (and move focus .ie cursor to first form group)
			if a user pressed the 'create' button from the table
			but this was difficult in practice, and not super important. so we skipped for now.
		*/
		this.showForm = true;
		// TODO: need to 1. clear any existing data from form (make it 'pristine') 2. scroll to form and make first input come into focus/ cursor selected input 
	}

	updateFromTable(obj) {
		/* 
			In case where user selects 'edit' from the table, we use the selectedService
			to attach the update object to a behaivor subject, which the form populates with.	

			Don't need to emit anything, except maybe, if you get  the zippy opening working, 
			like mentioned above, that could help the user experience.
		*/
		this.showForm = true;
		if (this.dataType === "game-info") {
			this.gameInfoSelectedService.select(obj);
		} else if (this.dataType == "console") {
			this.videogameConsoleSelectedService.select(obj);
		} else if (this.dataType == "forum-info") {
			this.forumInfoSelectedService.select(obj);
		} else if (this.dataType == "thread") {
			this.threadSelectedService.select(obj);
		} else {
			console.error("there was a problem loading the forms update data");
		}
	}

	deleteFromTable(id : string) {
		// we could use validation, try catch here. but typescript probably suffices.
		this.deleteEvent$.emit(id);
		// console.log(`we will delete ${id}`);
	}
}