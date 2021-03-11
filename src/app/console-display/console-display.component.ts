import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'console-display',
  templateUrl: './console-display.component.html',
  styleUrls: ['./console-display.component.css']
})
export class ConsoleDisplayComponent implements OnInit {

    @Input() title : string;
    @Input() posts : any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
