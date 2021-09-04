import { Injector } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { AuthService } from '../../core/auth.service';

export class DisplayNameValidation {




	static displayNameValidator(): ValidatorFn {
		

		let injector = Injector.create({providers : [{ provide: 'authService', useValue: AuthService }]})
    let authService = injector.get(AuthService);
 


		return (control: AbstractControl): { [key: string]: any } => {
			if (!control.value) {
				// if control is empty return no error
				return null;
			}

			// some rules... (just spit balling...)
			// 1. cant start with a number or special char
			// 2. cant contain spaces
			// 3. cant contain profanity

			// Perhaps google common display name rules...



			if (authService.displayNameTaken(control.value)) {
				return { DisplayNameTaken : true }
			}
			


		};
	}


}