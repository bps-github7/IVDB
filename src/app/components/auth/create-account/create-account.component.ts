import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
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
			passwords : this.fb.group({
				password : ["",	Validators.compose([
					Validators.required,
					Validators.minLength(8),
					CustomValidation.patternValidator(/\d/, { hasNumber: true }),
					CustomValidation.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
					CustomValidation.patternValidator(/[a-z]/, { hasLowerCase: true }),
					CustomValidation.patternValidator(/\W|_/g, { hasSpecialCharacters: true })
				])],
				confirmPassword : ["", Validators.compose([Validators.required])]
			}) 
		})

		// i THINK this is the problem line...
		// this.form.controls.passwords.setValidators(this.checkPasswords)
	}
	checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => { 
		let pass = group.get('password').value;
		let confirmPass = group.get('confirmPassword').value
	
		return pass === confirmPass ? null : { notSame: true }
	}

	get email () {
		return this.form.get('email');
	}

	get displayName () {
		return this.form.get('displayName');
	}


	// get passwords () {
	// 	return this.form.get('passwords');
	// }

	get password () {
		return this.form.get('passwords.password');
	}

	get confirmPassword () {
		return this.form.get('passwords.confirmPassword');
	}

	// 
	createAccount() {
		console.log(this.form.value)
	}

}
