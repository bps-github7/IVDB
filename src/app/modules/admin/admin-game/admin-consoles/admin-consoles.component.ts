import { VideogameConsole } from './../../../../models/content/videogame-console.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'admin-consoles',
  templateUrl: './admin-consoles.component.html',
  styleUrls: ['./admin-consoles.component.sass']
})
export class AdminConsolesComponent implements OnInit {


	@Input() platformName : string;
	@Input() existingConsoles : Observable<any>;
	@Input() makerChoices : Observable<any>;


	@Output() createConsoleEvent$ = new EventEmitter<VideogameConsole>()
	@Output() updateConsoleEvent$ = new EventEmitter<{id : string, data : Partial<VideogameConsole>}>()
	@Output() deleteConsoleEvent$ = new EventEmitter<string>();

	showFormBody : boolean = false;
	familyChoices = ["home", "portable", "hybrid"];


  constructor() { }

  ngOnInit(): void {
  }


	createConsole (VgConsole : NgForm) {
		//if validation tests were passed	
		this.createConsoleEvent$.emit(VgConsole.value);
	}

	updateConsole(data : Partial<VideogameConsole>) {
		this.updateConsoleEvent$.emit({id : data.id, data: data});
	}

	deleteConsole(id : string) {
		this.deleteConsoleEvent$.emit(id);
	}


}
