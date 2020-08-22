import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, ControlContainer } from '@angular/forms';
import { PasswordValidators } from '../common/validators/password.validators';
import { AuthService } from '../common/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {
    form;

    /*

    Regex for email validation: \b[\w.!#$%&’*+\/=?^`{|}~-]+@[\w-]+(?:\.[\w-]+)*\b
    
    Maybe there already is a Validator which does this. shoudl be at least
    */

    constructor(fb: FormBuilder, private auth : AuthService, private router : Router) {
        this.form = fb.group({
            fullName: ['', Validators.required],
            //need to validate email- does it have @, domain & tld? are characters used in body valid?
            email: ['', Validators.required],
            //need to produce warning if this username already exists
            username: ['', Validators.required],
            password: ['',
                Validators.required,
                Validators.minLength(12)
            ],
            confirmPassword: ['',
                Validators.required,
                Validators.minLength(12)
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

    createAccount() {
        this.auth.createAccount(this.email.value, this.password.value, this.username.value);
        //takes user to home after creating account- or shoul this be profile- to build profile?
        this.router.navigate(['/']);
    }
}