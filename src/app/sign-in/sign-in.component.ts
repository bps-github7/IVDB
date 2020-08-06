import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
    // form : FormGroup;

    // username = new FormControl('');
    // password = new FormControl('');
    form = new FormGroup({
        username : new FormControl('', [
            Validators.required,
            Validators.minLength(3)
        ]),
        password : new FormControl('', [
            Validators.required,
            Validators.minLength(10)
        ])
    });


    get username() {
        return this.form.get('username');
    }

    get password() {
        return this.form.get('password');
    }
}
