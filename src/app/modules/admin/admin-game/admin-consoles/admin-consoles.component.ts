import { VideogameConsole } from './../../../../models/content/videogame-console.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'admin-consoles',
  templateUrl: './admin-consoles.component.html',
  styleUrls: ['./admin-consoles.component.sass']
})
export class AdminConsolesComponent implements OnInit {


	@Input() platformName : string;
	@Input() existingConsoles : any;


	@Output() createConsoleEvent$ = new EventEmitter<VideogameConsole>()
	@Output() updateConsoleEvent$ = new EventEmitter<{id : string, data : Partial<VideogameConsole>}>()
	@Output() deleteConsoleEvent$ = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }


	createConsole (VgConsole : NgForm) {
		console.log(VgConsole);
		// if validation is passed
		//this.createConsoleEvent$.emit(VgConsole);
	}

	updateConsole(id : string, data : Partial<VideogameConsole>) {
		console.log(id);
		console.log(data);
		//this.updateConsoleEvent$.emit({id, data});
	}

	deleteConsole(id : string) {
		console.log(id);
		// this.deleteConsoleEvent$.emit(id);
	}


}
