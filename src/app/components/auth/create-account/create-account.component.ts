import { DisplayNameUniqueService } from './../../../modules/shared/validators/display-name-unique.service';
import { AuthService } from 'src/app/modules/core/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AsyncValidator, FormControl } from '@angular/forms';
import { CustomValidation } from 'src/app/modules/shared/validators/custom-validation';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.sass']
})
export class CreateAccountComponent implements OnInit {

	form : FormGroup;
	hideWarning: boolean = false;

  constructor(
		private fb : FormBuilder, 
		private authService : AuthService,
		private displayNameUniqueService : DisplayNameUniqueService,
		)  { }

  ngOnInit(): void {
		this.form = this.fb.group({
			email : ["", Validators.compose([
				Validators.required,
				Validators.email]
			)],
			displayName : new FormControl(null, 
				{
					updateOn : 'blur',
					validators : [Validators.required],
					asyncValidators : [ this.displayNameUniqueService.uniqueDisplayNameValidator() ],
				}
			),
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
				confirmPassword : ["", Validators.compose([
					Validators.required,
				])]
			}) 
		})
	}

	onPasswordChange() {
		if (this.password.value && this.confirmPassword.value === "") {
			this.confirmPassword.setErrors({required : true})
			return
		}

		if (this.confirmPassword.value != this.password.value) {
			this.confirmPassword.setErrors({ NoPasswordMatch : true });
		}		
	}


	get email () {
		return this.form.get('email');
	}

	get displayName () {
		return this.form.get('displayName');
	}


	get password () {
		return this.form.get('passwords.password');
	}

	get confirmPassword () {
		return this.form.get('passwords.confirmPassword');
	}

	// 
	createAccount() {
		if (this.form.valid) {
			// havent figured out why the app is routing to app.component when we create account, its not tied to form submission.

			this.authService.signUpWithEmailAndPassword(this.email.value, this.password.value, this.displayName.value)
			
		} else {
			console.log("error: could not create account, there was errors in the create account form")
		}
	}

}
