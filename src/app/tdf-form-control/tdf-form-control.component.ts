import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { GameInfoService } from '../common/services/gameinfo.service';

@Component({
  selector: 'tdf-form-control',
  templateUrl: './tdf-form-control.component.html',
  styleUrls: ['./tdf-form-control.component.css'],
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class TdfFormControlComponent implements OnInit {
    //using the bridge or adapter pattern here.
    //This component acts as a facade, facilitiating access
    //to different input field types (text, textarea, select, checkbox, radio)
    //the six properties directly below are passed through this component to
    //a custom-input component. the only truly mandatory input properties are:
    // form : the name of the form-group
    // id : the name of the form-control


    //NOTE that 'title' property changes to 'label' in the subcomponent used within this component.
    @Input() type : string = 'text';
    @Input() isRequired : boolean = false;
    @Input() pattern : string;
    @Input() title : string = "generic input field";
    @Input() placeholder : string = "";
    @Input() errorMsg : string = "";

    //properties unique to tdf
    
    //mandatory properties- pairing of subcomponent to ngModel wont work if these are not provided.
    @Input() dbObservable;
    @Input() form;
    @Input() id;

    //optional properties
    @Input() scrollText : string = "";
    @Input() options : (object | string []);
    radioSelected: any = [];
    checkboxSelected: any = [];

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
