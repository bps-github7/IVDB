import { NgForm } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConsoleSelectedService } from 'src/app/services/behaivor-subjects/console-selected.service';
import { GameInfoSelectedService } from 'src/app/services/behaivor-subjects/game-info-selected.service';

@Component({
  selector: 'dashboard-form',
  templateUrl: './admin-dashboard-form.component.html',
  styleUrls: ['./admin-dashboard-form.component.sass']
})
export class AdminDashboardFormComponent implements OnInit {

	@Input() dataType : "game-info" | "console";
	selected : any;

	@Output() createEvent$ = new EventEmitter<any>();
	@Output() updateEvent$ = new EventEmitter<any>();
	@Output() deleteEvent$ = new EventEmitter<string>();

	

  constructor(
		private gameInfoSelectedService : GameInfoSelectedService,
		private videogameConsoleSelectedService : ConsoleSelectedService
	) { }

  ngOnInit(): void {
		if (this.dataType === "game-info") {
			this.gameInfoSelectedService.selected$.subscribe((data) => this.selected = data)
		} else if (this.dataType === "console") {
			this.videogameConsoleSelectedService.selected$.subscribe((data) => this.selected = data)
		}
		else {
			console.log("nothing to show")
		}
  }

	save(formValue : NgForm) {
		console.log(formValue)
		console.log("need to figure out whether we are editing or creating!")
	}

	reset(form : NgForm) {
		if (confirm("please note: reset will not delete this item, just erase the values it currrently has.\n use the delete button to erase the object. please confirm you understand before proceeding")) {
			form.reset()
		}
	}

	delete(obj : any) {
		if (obj.id){
			this.deleteEvent$.emit(obj?.id)
			this.selected = undefined;
		} else {
			console.log("error: cannot delete object without an id");
		}
	}
}
