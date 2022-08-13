import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

	form : FormGroup;

  constructor(
		private fb : FormBuilder,
		private authService: AuthService,

		// TODO: wanna get rid of this, but for now its a bandaid solution
		private router : Router,		
		) { }

  ngOnInit(): void {
		this.form = this.fb.group({
			email : ["", [Validators.required, Validators.email]],
			password : ["", [Validators.required]]
		})

  }

	get email () {
		return this.form.get('email')
	}

	get password () { 
		return this.form.get('password')
	}

	login() {
		this.authService.emailAndPasswordLogIn(this.email.value, this.password.value);
	}

	googleLogin() {
		// TODO: gotto get the return value from the promise >>>
		this.authService.googleLogin()
		setTimeout(() => {

			this.router.navigateByUrl("/")
		},9000)
		
	}

}
