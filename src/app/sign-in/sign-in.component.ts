import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../common/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

    constructor(private auth: AuthService){
    }
    form = new FormGroup({
        email : new FormControl('', [
            Validators.required
        ]),
        password : new FormControl('12345', [
            Validators.required
        ])
    });

    get email() {
        return this.form.get('email');
    }

    get password() {
        return this.form.get('password');
    }

    login() {
        this.auth.login(this.email.value, this.password.value)
    }

    google_login() { this.auth.google_login(); }

    facebook_login() { this.auth.facebook_login(); }
}
