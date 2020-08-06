import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { PasswordValidators } from '../common/validators/password.validators';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {

    // fullName = new FormControl('');
    // email = new FormControl('');
    // username = new FormControl('');
    // password = new FormControl('');
    // confirmPassword = new FormControl('');

    form = new FormGroup({

        //gonna come back later to add specific validation errors.
        //for now- everything is required

        fullName : new FormControl('', Validators.required),
        email : new FormControl('', Validators.required),
        username : new FormControl('', Validators.required),
        password : new FormControl('', [
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(25)
            //does passwordsShouldMatch validator go in this one too? probably not.
        ]),
        confirmPassword : new FormControl('', [
            Validators.required]
            )},
    //mosh used FormBuilder in the excersise where this code is shown.
    //the validation error this async validator should trigger is not working as of now.
    {
        validators: PasswordValidators.accountPasswordsShouldMatch
    }
    );

    get fullName() {
        return this.form.get('fullName');
    }

    get email() {
        return this.form.get('email');
    }

    get username() {
        return this.form.get('username');
    }

    get password() {
        return this.form.get('password');
    }

    get confirmPassword() {
        return this.form.get('confirmPassword');
    }
    
    // constructor() {
    // }

}
