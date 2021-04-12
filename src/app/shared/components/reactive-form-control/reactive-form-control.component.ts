import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'rfc',
  templateUrl: './reactive-form-control.component.html',
  styleUrls: ['./reactive-form-control.component.css']
})
export class ReactiveFormControlComponent implements OnInit {

    /* 
    A master component which takes an argument of type
    ```
    const inputList : FormSpec = [
        { 
            form-control-name : FormControl
            label: 'enter your name',
            type: 'select'
            rest: [
                'option1'.
                'option2'
            ]
        },
        { ... }
    ]
    ```

    and this builds a form matching the specification
    of the arugment. very high tech.
     */
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
