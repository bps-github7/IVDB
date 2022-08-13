import { Observable } from 'rxjs';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/modules/shared/components/dialog/dialog.component';
import { Content } from 'src/app/models/content/content.model';

@Component({
  selector: 'admin-content-manager',
  templateUrl: './admin-content-manager.component.html',
  styleUrls: ['./admin-content-manager.component.sass']
})
export class AdminContentManagerComponent implements OnInit {

	/* 
	admin-content-manager: a dumb component which takes a slice 
	of store data (content) and supports crud operations by emitting
	parents listened to by the parent smart component 'admin-content'.
	*/

	show : boolean = false;
	@Input() contentType : string;
	@Input() build : any;
	@Input() form : any;
	@Input() content$ : Observable<any>;
	config : any; 

	@Output() createContentEvent$ = new EventEmitter();
	@Output() updateContentEvent$ = new EventEmitter<{id : string, body : Partial<Content>}>();
	@Output() deleteContentEvent$ = new EventEmitter<{id : string}>();

  constructor() { }

  ngOnInit(): void {
		this.config =  { title : `recently posted ${this.contentType}`, displayedColumns : ["title", "edit", "delete"], type: this.contentType }
	}

	createContent() {
		this.createContentEvent$.emit();
	}

	updateContent(id : string, existingItem) {
		// ** * yes this looks odd but it out of respect to the store.dispatch( updateAction ) interface
		this.updateContentEvent$.emit({id, body: existingItem});
	}

	deleteContent(id : string) {
		this.deleteContentEvent$.emit({id});
	}


}
