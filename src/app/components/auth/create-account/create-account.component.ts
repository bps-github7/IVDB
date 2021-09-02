import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.sass']
})
export class CreateAccountComponent implements OnInit {

	form : FormGroup;

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
		this.form = this.fb.group({
			email : ["", [Validators.required]],
			displayName : ["", [Validators.required]],
			// need to make custom validators for password and password match
			password : ["", [Validators.required]],
			confirmPassword : ["", [Validators.required]], 
		})
	}

	get email () {
		return this.form.get('email');
	}

	get displayName () {
		return this.form.get('displayName');
	}

	get password () {
		return this.form.get('password');
	}

	get confirmPassword () {
		return this.form.get('confirmPassword');
	}

	// 
	createAccount() {
		console.log(this.form.value)
	}

}
