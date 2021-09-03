import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidation } from 'src/app/modules/shared/validators/custom-validation';
import { NoPasswordMatch } from 'src/app/modules/shared/validators/no-password-match.validators';



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
			email : ["", Validators.compose([Validators.required, Validators.email])],
			displayName : ["", [Validators.required]],
			// need to make custom validators for password and password match
			password : ["",	Validators.compose([
					Validators.required,
					CustomValidation.patternValidator(/\d/, { hasNumber: true }),
					CustomValidation.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
					CustomValidation.patternValidator(/[a-z]/, { hasLowerCase: true }),
					CustomValidation.patternValidator(/\W|_/g, { hasSpecialCharacters: true }),
					Validators.minLength(8)
			])],
			// confirmPassword : ["", Validators.compose([Validators.required]) ], 

			confirmPassword : ["", Validators.compose([Validators.required, NoPasswordMatch.passwordMatchValidator]) ], 
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
