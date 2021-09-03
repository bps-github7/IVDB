import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class NoPasswordMatch {
	static passwordMatchValidator() : ValidatorFn | null {
		return (group: AbstractControl): { [key: string]: any } => {
			// stop validating if no value to avoid errors
			// if (!group.value) {
			// 	return null
			// }

			let pass = group.get('password').value;
			let confirmPass = group.get('confirmPassword').value
			return pass === confirmPass ? null : { NoPasswordMatch : true }


		} 
	}
}