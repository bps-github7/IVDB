import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

	form : FormGroup;

  constructor(private fb : FormBuilder) { }

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
		console.log(this.form.value);
	}
}
