import { AuthService } from 'src/app/modules/core/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidation } from 'src/app/modules/shared/validators/custom-validation';



@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.sass']
})
export class CreateAccountComponent implements OnInit {

	form : FormGroup;

  constructor(private fb : FormBuilder, private authService : AuthService)  { }

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
			this.authService.signUpWithEmailAndPassword(this.email.value, this.password.value)
			// IF the above line is successful, create a user with the form data in store and users collection 

		} else {
			console.log("error: could not create account, there was errors in the create account form")
		}
		
		
	}

}
