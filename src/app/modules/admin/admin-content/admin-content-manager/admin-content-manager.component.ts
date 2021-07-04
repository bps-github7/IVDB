import { Observable } from 'rxjs/Observable';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/modules/shared/components/dialog/dialog.component';

@Component({
  selector: 'admin-content-manager',
  templateUrl: './admin-content-manager.component.html',
  styleUrls: ['./admin-content-manager.component.sass']
})
export class AdminContentManagerComponent implements OnInit {


	/* 
	admin-content-manager: a dumb component which takes a slice 
	of store data (content) and supports crud operations.
	*/

	show : boolean = false;
	@Input() contentType : string;
	@Input() build : any;
	@Input() form : any;
	@Input() content$ : Observable<any>;
	config : any; 

  constructor(private dialog : MatDialog) { }

  ngOnInit(): void {
		this.config =  { title : `recently posted ${this.contentType}`, displayedColumns : ["title", "edit", "delete"], type: this.contentType }
	}

  openDialog(type : string, updateObject?: any) {
		// const config = new MatDialogConfig();
		console.log("opening up a dialog of tyope", type, "and update object")
		console.log(updateObject)	
		// // some configurations for the dialog
		// config.disableClose = true;
		// config.autoFocus = true;
		// config.height = '1600px';
		// config.width = `1200px`;
		// // would be better if open dialog knew these instructions. the class doesnt need them.
		// config.data = {
		// 	type,
		// 	initialState: this.form,
		// 	buildInfo : this.build,    
		// 	updateObject : (updateObject ? updateObject : null)
		// };

		// this.dialog.open(DialogComponent, config)
		// .afterClosed()
		// .subscribe(result => {
		// 	if(result.uid) {
		// 		// you should just make the dialog component more mindful of what kinda stuff it returns!
		// 		// this.contentService.edit(result.);
		// 		console.log("then we update")
		// 	}
		// 	else {
		// 		console.log("then we create")
		// 		// this.contentService.create(result);
		// 	}
		// })
	}

	delete(content :  string) {
		console.log("delete a jawn")
	}

}
