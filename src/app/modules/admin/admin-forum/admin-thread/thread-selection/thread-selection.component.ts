import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Thread } from 'src/app/models';

@Component({
  selector: 'thread-selection',
  templateUrl: './thread-selection.component.html',
  styleUrls: ['./thread-selection.component.sass']
})
export class ThreadSelectionComponent implements OnInit {

	@Input() threads$ : Observable<any>;

	@Output() selectedEvent$ = new EventEmitter<Thread>();

	constructor() { }

  ngOnInit(): void {
  }

	threadSelected(event : any, thread : Thread) {
		if (event.target.checked) {
			this.selectedEvent$.emit(thread);
		}
	}


}
