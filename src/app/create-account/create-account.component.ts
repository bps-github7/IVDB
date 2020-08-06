import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PasswordValidators } from '../common/validators/password.validators';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {

    form: FormGroup;

    constructor(fb: FormBuilder) {
        this.form = fb.group({
            fullName: ['', Validators.required],
            userName: ['', Validators.required],
            emailAddress: ['', Validators.required],
            password: ['', 
                Validators.required,
                PasswordValidators.validPassword
            ],
            confirmPassword: ['',
                Validators.required,
                PasswordValidators.validPassword,
                PasswordValidators.passwordsShouldMatch
            ]
        })
    }

}
