import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { GameInfoService } from '../common/services/gameinfo.service';

@Component({
  selector: 'tdf-formgroup',
  templateUrl: './tdf-formgroup.component.html',
  styleUrls: ['./tdf-formgroup.component.css'],
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class TdfFormgroupComponent implements OnInit {
    @Input('form') form;
    @Input('id') id;
    @Input('title') title : string;
    @Input('type') type : string = 'text';
    @Input('options') options;
    radioSelected: any;
    checkboxSelected: any;

    constructor() { }

    insert(input : HTMLInputElement) {
        if (input.value === '') return false;

        // formControl.push(input.value);
        console.log("logging " + input.value)
        input.value = '';
    }

  ngOnInit(): void {
  }

}
