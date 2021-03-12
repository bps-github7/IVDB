import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'console-display',
  templateUrl: './console-display.component.html',
  styleUrls: ['./console-display.component.css']
})
export class ConsoleDisplayComponent implements OnInit {

    @Input() title : string;
    @Input() posts : any = [];

    @Output() editEvent = new EventEmitter<string>();
    @Output() deleteEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

    edit(uid : string) {
        this.editEvent.emit(uid);
    }

    delete(uid : string) {
        if (confirm("are you sure you want to delete this console? (cannot be undone)"))
            this.deleteEvent.emit(uid);
    }

}
