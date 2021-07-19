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
	choices : string [];
	chosen : string;

	openForm : boolean = false;

	// can we handle this with a behaivor subject as well?
	@Output() deleteEvent$ = new EventEmitter<any>();

  constructor(
		private gameInfoSelectedService : GameInfoSelectedService,
		private videogameConsoleSelectedService : ConsoleSelectedService
	) { }

  ngOnInit(): void {
		// if tables input prop was passed in, populate 'choices' with the key of each table object (its title)
		this.choices = this.tables ? Object.keys(this.tables)  : null;
	}

	create() {
		console.log("create: at table manager level")
		this.openForm = true;
	}

	update(obj) {
		// we had to make this class more concrete at some point..
		if (this.dataType === "game-info") {
			this.gameInfoSelectedService.select(obj)
		} else {
			this.videogameConsoleSelectedService.select(obj)
		}

		console.log("update got this")
		console.log(obj)

	}

	delete(id : string) {
		console.log(`we will delete ${id}`);
	}
}