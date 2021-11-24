import { selectUserByDisplayNameExactMatch } from 'src/app/store/selectors/users.selector';
import { AbstractControl, AsyncValidatorFn, FormControl, ValidatorFn } from '@angular/forms';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromUsers from 'src/app/store/reducers/users.reducer';
import { readUsers } from 'src/app/store/actions/users.actions';
import { first, Observable, of, firstValueFrom, map } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})

export class DisplayNameUniqueService {

	constructor(private usersStore : Store<fromUsers.State>) { }
	
	async checkUserStore(value : string) {
		const result =  await firstValueFrom(await this.usersStore.pipe(select(selectUserByDisplayNameExactMatch(value))))
		return result ? true : false
	}

	// TODO: this doesnt work, 
	uniqueDisplayNameValidator() : AsyncValidatorFn {
		return (control : FormControl ) => {
			return new Promise((resolve,reject) => {
				const ngrx_user = this.checkUserStore(control.value)
				console.log(ngrx_user)
				if (ngrx_user) {
					resolve({DisplayNameTaken : true});
				}
				reject(null)
			})
		}
	}

	/* 
	static passwordMatchValidator() : ValidatorFn | null {
		return (group: AbstractControl): { [key: string]: any } => {
			let displayName = group.get('displayName').value;
			
			if (confirmPass !== pass) {
				group.setErrors({ NoPasswordMatch : true })
				return {NoPasswordMatch : true}
			}
			return null
		} 
	}
	*/


}