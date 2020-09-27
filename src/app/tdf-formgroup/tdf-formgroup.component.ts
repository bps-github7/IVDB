import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tdf-formgroup',
  templateUrl: './tdf-formgroup.component.html',
  styleUrls: ['./tdf-formgroup.component.css']
})
export class TdfFormgroupComponent implements OnInit {
    @Input('form') form_id;
    @Input('id') input_id;
    @Input('label') human_readable_id : string;
    @Input('type') input_type = 'text';
    @Input('options') options = null;

  constructor() { }

  ngOnInit(): void {
  }

}
