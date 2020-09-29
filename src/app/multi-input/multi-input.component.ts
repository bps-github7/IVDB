import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'multi-input',
  template: `
  <div *ngFor="let v of values">
    {{ v }}
  </div>
  <input #response  (keydown.enter)="insert(response)" type="text">
  `,
  styleUrls: ['./multi-input.component.css']
})
export class MultiInputComponent implements OnInit {

    values=[];
    //assuming we have two way binding active, this may work...
    @Input('formControl') formControl;

    constructor() { }

    ngOnInit(): void { }

    insert(input : HTMLInputElement) {
        if (input.value === '') return false;
        this.values.push(input.value)
        //bit of a stretch but might work.
        this.formControl = this.values;
        console.log("logging " + input.value)
        input.value = '';
        //find a way to send values array to parent/container form
    }
}
