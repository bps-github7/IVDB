import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, ControlContainer } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/common/services/auth.service';
import { UserService } from 'src/app/common/services/user.service';
import { PasswordValidators } from 'src/app/common/validators/password.validators';
import { UsernameValidator } from 'src/app/common/validators/username.validators';
import { User } from 'src/app/models/user/user';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
    form;
    //shared module?
    user : User;
    authError: any;
    // uid: any;

    ngOnInit() {
        this.auth.eventAuthError$.subscribe(data => this.authError = data);
    }


    constructor(
        fb: FormBuilder,
        private auth: AuthService,
        private router : Router,
        private userService : UserService) {
        // this.auth.appUser$.subscribe((appUser) => this.uid = appUser.uid);

        this.form = fb.group({
            email: ['', 
                [Validators.required,
                Validators.email,
                UsernameValidator.cannotContainSpace]
            ],
            //need to produce warning if this username already exists
            username: ['', [Validators.required, UsernameValidator.cannotContainSpace] ],
            password: ['',
                [Validators.required,
                Validators.minLength(12)]
            ],
            confirmPassword: ['',
                [Validators.required,
                Validators.minLength(12)]
            ]
        },
        {
            //there is some kind of async error coming from this guy
            validators: PasswordValidators.accountPasswordsShouldMatch
        })
    }
 
    get email() { return this.form.get('email'); }
    
    //should i go through trobule of changing name to match what its called in app? (displayNAme) prob not worth the effort
    get username() { return this.form.get('username'); }
    
    get password()  { return this.form.get('password'); }

    get confirmPassword() { return this.form.get('confirmPassword'); }

    createAccount() {
        this.auth.createUser(this.email.value, this.password.value, this.username.value);
    }

    showPassword() {
        alert("feature not implemented at this time.");
    }
}