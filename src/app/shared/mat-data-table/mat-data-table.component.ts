import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'mat-data-table',
  templateUrl: './mat-data-table.component.html',
  styleUrls: ['./mat-data-table.component.css']
})
export class MatDataTableComponent implements OnInit {

  /* 
  Basic re-usable C.R.U.D table component build with Angular Materials
  NOTE: must be part of a module which imports: MatSlideToggleModule, MatTableModule, MatTooltipModule.
  
  source : must be provided- this is the data which feeds the table cells
  we should make it so you can pass in various objects to customize the interface (attributes displayed)
  for our table. Right now, the basic shape of source is

   Content { title : string, description : string }
  */

  @Input() source: any;
  // @Input() mode: string = "routed"; 
  @Input() mode: string; 

  @Input() config: any = { title : "Uploaded Content", displayedColumns : ["name", "edit", "delete"], type: "content"};

  @Output() openDialogEvent = new EventEmitter<any>();
  @Output() deleteEvent = new EventEmitter<any>();


  title;
  type;
  displayedColumns
  show: boolean = false;

  constructor() {
    this.title = this.config.title;
    this.displayedColumns = this.config.displayedCoulmns;
    this.type = this.config.type;
  }

  ngOnInit(): void {
  }

  openDialog(dialogType : string, editing?) {
    this.openDialogEvent.emit({dialogType, editing})
  }

  delete(uid : string) {
    this.deleteEvent.emit(uid);
  }
}
