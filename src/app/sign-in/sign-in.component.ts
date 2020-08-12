import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../common/services/auth.service';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

    constructor(private afAuth: AngularFireAuth){
    }

    // form : FormGroup;

    // username = new FormControl('');
    // password = new FormControl('');
    form = new FormGroup({
        username : new FormControl('guest', [
            Validators.required
        ]),
        password : new FormControl('12345', [
            Validators.required
        ])
    });


    get username() {
        return this.form.get('username');
    }

    get password() {
        return this.form.get('password');
    }

    google_login() {
        this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    }

    facebook_login() {
        alert('facebook login not working at this time.');
        //this.afAuth.signInWithRedirect(new firebase.auth.FacebookAuthProvider());
    }

    login() {
        //note- not a legitimate/ secure login. needs backend to work correctly

        //let isValid = AuthService.login(this.form.value);
        //if (!isValid) this.form.setErrors({ invalidLogin : true });

        //logging in should change views on the site- sign in -> signout, profile becomes available, comments are authored by
        if (this.username.value === 'guest' && this.password.value === '12345') return { login : true }; 
        this.form.setErrors({ invalidLogin : true });
        
    
    }

}
