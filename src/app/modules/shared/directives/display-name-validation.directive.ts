import { AuthService } from 'src/app/modules/core/auth.service';
import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_VALIDATORS, ValidationErrors } from '@angular/forms';
import { catchError, map, Observable, of } from 'rxjs';

@Directive({
  selector: '[appDisplayNameValidation]',
	providers: [{ provide: NG_VALIDATORS, useExisting: DisplayNameValidationDirective, multi: true }]
})
export class DisplayNameValidationDirective implements AsyncValidator {

  constructor(private AuthService : AuthService) { }

	validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null>  {
		return this.AuthService.displayNameTaken(control.value).pipe(
      map(isTaken => (isTaken ? { DisplayNameTaken: true } : null)),
      catchError(() => of(null)))
		}
}
