import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, ControlContainer } from '@angular/forms';
import { PasswordValidators } from '../common/validators/password.validators';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';


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
        firebase.auth().createUserWithEmailAndPassword(this.email.value, this.password.value)
        .then((result) => {
            return firebase.auth().currentUser.updateProfile({
            displayName: this.username.value
            })
        }).catch(function(error) {
            return {"error code" : error.code,
                "error message" : error.message};
            })
    }
}