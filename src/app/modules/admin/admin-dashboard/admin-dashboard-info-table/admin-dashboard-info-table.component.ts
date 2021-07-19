import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'info-table',
  templateUrl: './admin-dashboard-info-table.component.html',
  styleUrls: ['./admin-dashboard-info-table.component.sass']
})
export class AdminDashboardInfoTableComponent implements OnInit {

	/* A dumb component, which takes an observable stream (slice of the store)
		displays it, and facilitates creation, updating and deletion of store data
	*/

	@Input() tableData : Observable<any>; 
	@Input() tableHeading : string;
	@Input() tableColumns : string [] = ["title","edit","delete"]

	@Output() createEvent$ = new EventEmitter<any>()
	@Output() updateEvent$ = new EventEmitter<any>()
	@Output() deleteEvent$ = new EventEmitter<any>()
  constructor() { }

  ngOnInit(): void {
  }


	updateItem (item : any) {
		if (confirm("are you sure you want to update this item?\nexisting data will be overwritten!\nCannot be undone!")) {
			this.updateEvent$.emit(item);
		}
	}

	deleteItem (id : string) {
		if (confirm("are you sure you want to delete this item?\nCannot be undone!")) {
			this.deleteEvent$.emit(id);
		}
	}

	createItem () {
		this.createEvent$.emit();
	}
}
