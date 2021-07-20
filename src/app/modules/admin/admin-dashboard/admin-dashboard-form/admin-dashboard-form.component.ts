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


@Component({
  selector: 'dashboard-form',
  templateUrl: './admin-dashboard-form.component.html',
  styleUrls: ['./admin-dashboard-form.component.sass']
})
export class AdminDashboardFormComponent implements OnInit {

	@Input() dataType : "game-info" | "console";
	@Input() makerChoices : Observable<any>;
	selected : any={};
	gameInfoFamilies : any[];
	consoleFamilies : any[];

	@Output() createEvent$ = new EventEmitter<any>();
	@Output() updateEvent$ = new EventEmitter<any>();
	@Output() deleteEvent$ = new EventEmitter<string>();

	

  constructor(
		private gameInfoSelectedService : GameInfoSelectedService,
		private videogameConsoleSelectedService : ConsoleSelectedService,		
		private gameInfoStore : Store<fromGameInfo.State>
		) { }

  ngOnInit(): void {

		// to make these reusable, we will need this info passed in!
		this.gameInfoStore.dispatch( readGameInfo() )

		this.makerChoices = this.gameInfoStore.select( getFamily("platform") )
		this.gameInfoFamilies = ['category','creator','platform']
		this.consoleFamilies = ["home", "portable", "hybrid"];

		if (this.dataType === "game-info") {
			this.gameInfoSelectedService.selected$.subscribe((data) => this.selected = data)
		} else if (this.dataType === "console") {
			this.videogameConsoleSelectedService.selected$.subscribe((data) => this.selected = data)
		}
		else {
			console.log("nothing to show")
		}
  }

	save(form : NgForm) {
		if (this.selected.id) {
			this.updateEvent$.emit({id : this.selected.id, ...form.value});
		} else {
			this.createEvent$.emit(form.value);
		}
		// do a hard reset, so that the form has no data displayed and nothing to recall the last submit with.
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
			console.log("error: cannot delete object without an id");
			return;
		}
		// we gotta reset the form if the data is deleted 
		form.reset()
		this.selected = {};
		
	}

}
