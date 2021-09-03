import { AbstractControl, ValidationErrors } from "@angular/forms";

export class NoPasswordMatch {
	static passwordMatchValidator(control: AbstractControl) : ValidationErrors | null {
		let password = control.get('password');
		let confirmPassword = control.get('confirmPassword');
		// compare is the password match
		if (password.value && confirmPassword.value){
			if (password.value !== confirmPassword.value) {
				// if they don't match, set an error in our confirmPassword form control
				control.get('confirmPassword').setErrors({NoPasswordMatch : true})
				return { NoPassswordMatch: true };
			} 
			return null;
		}
	}
}