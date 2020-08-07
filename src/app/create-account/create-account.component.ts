import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, ControlContainer } from '@angular/forms';
import { PasswordValidators } from '../common/validators/password.validators';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {
    form;

    constructor(fb: FormBuilder) {
        this.form = fb.group({
            fullName: ['', Validators.required],
            email: ['', Validators.required],
            username: ['', Validators.required],
            password: ['',
                Validators.required,
            ],
            confirmPassword: ['',
                Validators.required
            ]
        },
        {
            validators: PasswordValidators.accountPasswordsShouldMatch
        })
    }

    get fullName() {
        return this.form.get('fullName');
    }

    get email() {
        return this.form.get('email');
    }

    get username() {
        return this.form.get('username');
    }

    get password()  {
        return this.form.get('password');
    }

    get confirmPassword() {
        return this.form.get('confirmPassword');
    }
}
