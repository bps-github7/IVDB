import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
    form : FormGroup;
    
    constructor(fb: FormBuilder) {
        this.form = fb.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });
    }
}
