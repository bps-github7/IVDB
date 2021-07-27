import { Observable } from 'rxjs/Observable';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { VideogameConsole } from 'src/app/models/content/videogame-console.model';
import { v4 } from 'uuid';

// ngrx + our store stuff
import { Store } from '@ngrx/store';
import * as fromConsole from 'src/app/store/reducers/videogame-console.reducer';
import * as consoleActions from 'src/app/store/actions/videogame-console.actions'; 
import { selectConsolesByMaker, selectConsolesByMakerAndTitleSubstring } from 'src/app/store/selectors/videogame-console.selector';

@Component({
  selector: 'admin-consoles',
  templateUrl: './admin-consoles.component.html',
  styleUrls: ['./admin-consoles.component.sass']
})
export class AdminConsolesComponent implements OnInit {
	/* 
	a non-routed, container component which manages consoles from
	within the admin module. In template, it is nested within the admin-game
	component, accesible by choosing the consoles tab

	it handles communication with the store
	and uses the admin-dashboard-table-manager
	to faciliate CRUD ops on consoles. 
	
	reduces boilerplate and irrelevant code from admin-game
	which used to handle the CRUD and display of games, game info and consoles on its own.
	*/
	showMetaData : boolean = false;
	buttonText : string;
	consoleData : any={};
	familyChoices: string[];
	makerChoices: string[];

	constructor(private consoleStore : Store<fromConsole.State>) { }

	ngOnInit() {
		this.buttonText = this.showMetaData ? "Show info about consoles" : "hide Info"

		this.consoleStore.dispatch( consoleActions.readVideogameConsole() );

		this.consoleData = {
			"nintendo" : this.consoleStore.select(selectConsolesByMaker("nintendo")),
			"sony" : this.consoleStore.select(selectConsolesByMaker("sony")),
			"microsoft" : this.consoleStore.select(selectConsolesByMaker("microsoft")),
			"pc" : this.consoleStore.select(selectConsolesByMaker("pc")),
			"mobile" : this.consoleStore.select(selectConsolesByMaker("mobile"))
		}
		this.makerChoices = Object.keys(this.consoleData);
		this.familyChoices = ["home", "portable", "hybrid", "other"];
	}

	filterConsoles (event) {
		const { query, family } = event	
		if (query) {
			this.consoleData[family] = this.consoleStore.select(selectConsolesByMakerAndTitleSubstring(family, query));
		} else {
			this.consoleData[family] = this.consoleStore.select(selectConsolesByMaker(family))
		}
	
	}

	createConsole(content : VideogameConsole) {
		this.consoleStore.dispatch( consoleActions.createVideogameConsole({id: v4(), ...content}) )
	}

	updateConsole(content : Partial<VideogameConsole> | VideogameConsole ) {
		this.consoleStore.dispatch( consoleActions.updateVideogameConsole({id : content.id, data : content}) )
	}

	deleteConsole(id : string) {
		this.consoleStore.dispatch( consoleActions.deleteVideogameConsole({ id }) )
	}
}
