import { selectUserByDisplayNameExactMatch } from './../../../store/selectors/users.selector';
import { AsyncValidatorFn, FormControl, ValidatorFn } from '@angular/forms';
import { Injectable, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromUsers from 'src/app/store/reducers/users.reducer';
import { readUsers } from 'src/app/store/actions/users.actions';
import { catchError, first, Observable, of } from 'rxjs';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DisplayNameUniqueService {

	filteredUsers$ : Observable<any>;
	users$ : Observable<any>;

  constructor(private usersStore : Store<fromUsers.State>) {
		this.filteredUsers$ = this.users$ = this.usersStore.select(fromUsers.selectAll)
		this.usersStore.dispatch( readUsers() );
	 }




	filter(query : string) {
		this.filteredUsers$ = (query) ?
					this.usersStore.pipe(select(selectUserByDisplayNameExactMatch(query))) :
					this.users$;
	}

	uniqueDisplayNameValidator() : AsyncValidatorFn {
		return (control : FormControl) => {
			
		
		}
	}

	// uniqueDisplayNameValidator() : AsyncValidatorFn {
	// 	return (control : FormControl) => {
	// 		return new Promise((resolve, reject) => {
	// 			setTimeout(() => {
	// 				let response;
	// 				this.filter(control.value)
	// 				this.filteredUsers$.subscribe(resp => response = resp)
	// 				if (response.length === 1) {
	// 					resolve({DisplayNameTaken : true})
	// 				} else {
	// 					reject(null);
	// 				}
	// 				// resolve(response.length === 1 ? {DisplayNameTaken : true} : null)		
	// 				},1000)
	// 			})
	// 	}
	// }
}
