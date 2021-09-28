import { selectUserByDisplayNameExactMatch } from 'src/app/store/selectors/users.selector';
import { AsyncValidatorFn, FormControl } from '@angular/forms';
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

	uniqueDisplayNameValidator() : AsyncValidatorFn {
		// TODO: this works but if we get an error, then delete some part of display name, error stays up.
		// question is, is this an issue with this validator or the component logic/ markdown
		return (control : FormControl ) => {
			return new Promise((resolve,reject) => {
				this.usersStore.pipe(select(selectUserByDisplayNameExactMatch(control.value)))
				.subscribe((result : any) => {
					if(result) {
						resolve({DisplayNameTaken : true});
					}
					reject(null);
				})
			})
		}
	}
}
