import { AuthService } from 'src/app/modules/core/auth.service';
import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_VALIDATORS, ValidationErrors } from '@angular/forms';
import { catchError, map, Observable, of } from 'rxjs';

@Directive({
  selector: '[appDisplayNameValidation]',
	providers: [{ provide: NG_VALIDATORS, useExisting: DisplayNameUniqueValidationDirective, multi: true }]
})
export class DisplayNameUniqueValidationDirective implements AsyncValidator {

  constructor(private AuthService : AuthService) { }

	validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null>  {
		return this.AuthService.getUsers$()	.pipe(map((snapshot) => {
			snapshot.map((doc) => {
				unavailable.push(doc.payload)
			})
		})) 

		// TODO: is there a cleaner way to do this?
		docs.forEach((user : User) => {
			unavailable.push(user.displayName);
		})
		
		console.log("Hi from displayNameTaken in AuthService:")
		console.log(unavailable);
		

		// return this.AuthService.displayNameTaken(control.value).pipe(
    //   map(isTaken => (isTaken ? { DisplayNameTaken: true } : null)),
    //   catchError(() => of(null)))
		}
}
