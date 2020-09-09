import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, ControlContainer } from '@angular/forms';
import { PasswordValidators } from '../common/validators/password.validators';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AuthService } from '../common/services/auth.service';


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
    form;
    user : User;
    authError: any;

    ngOnInit() {
        this.auth.eventAuthError$.subscribe(data => this.authError = data);
    }


    constructor(
        fb: FormBuilder,
        private auth: AuthService,
        private router : Router) {
        this.form = fb.group({
            //need to validate email- does it have @, domain & tld? are characters used in body valid?            
            /*
            Regex for email validation: \b[\w.!#$%&’*+\/=?^`{|}~-]+@[\w-]+(?:\.[\w-]+)*\b
            Maybe there already is a Validator which does this. shoudl be at least
            */
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
 
    get email() { return this.form.get('email'); }
    
    //should i go through trobule of changing name to match what its called in app? (displayNAme) prob not worth the effort
    get username() { return this.form.get('username'); }
    
    get password()  { return this.form.get('password'); }

    get confirmPassword() { return this.form.get('confirmPassword'); }

    createAccount() {
        this.auth.createUser(this.email.value, this.password.value, this.username.value)
    }

    showPassword() {
        alert("feature not implemented at this time.");
    }
}