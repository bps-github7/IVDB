import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tdf-formgroup',
  templateUrl: './tdf-formgroup.component.html',
  styleUrls: ['./tdf-formgroup.component.css']
})
export class TdfFormgroupComponent implements OnInit {
    @Input('form') form;
    @Input('id') id;
    @Input('title') title : string;
    @Input('type') type : string = 'text';
    @Input('options') options;

  constructor() { }

  ngOnInit(): void {
  }

}
