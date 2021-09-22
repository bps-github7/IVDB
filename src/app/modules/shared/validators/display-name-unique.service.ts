import { switchMap } from 'rxjs/operators';
import { selectUserByDisplayNameExactMatch, uniqueDisplayName } from './../../../store/selectors/users.selector';
import { AbstractControl, AsyncValidatorFn, FormControl, ValidatorFn } from '@angular/forms';
import { Injectable, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromUsers from 'src/app/store/reducers/users.reducer';
import { readUsers } from 'src/app/store/actions/users.actions';
import { catchError, delay, first, Observable, of, map } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})

export class DisplayNameUniqueService {

	users$ : Observable<any>;
	filteredUsers$ : Observable<any>
	allUsers: any;


	constructor(
		private afs : AngularFirestore,
		private usersStore : Store<fromUsers.State>) {
		this.filteredUsers$ = this.users$ = this.usersStore.select(fromUsers.selectAll)
		this.usersStore.dispatch( readUsers() );
	 }

	testingUniqueDisplayName( value ) {
		/* P.O.C with naive way to do this without consulting entity. sort of brittle,
		 has to match case of field value, no way around that 
		 except saving a duplicate field with the display name in lowercase*/

		var userRef = this.afs.collection('users')	
		userRef.ref.where('displayName', '==', value).get()
				.then(snapshot => {
						if (snapshot.empty) {
								console.log('displayName is unique', snapshot.empty);
								return of({DisplayNameTaken : true});
						} else {
								console.log('displayName already exists');
								return of(null)
						}
				});

	}

	getDisplayNames() {
		let displayNames = []
		this.users$.subscribe(resp => {
			resp.forEach((user : User) => {
				displayNames.push(user.displayName.toLowerCase())
			})
		})
		return displayNames;
	}

	testing(query) {
		this.filteredUsers$ = (query) ?
					of(this.getDisplayNames().includes(query.toLowerCase())) :
					of(false);
		this.filteredUsers$.pipe(first()).subscribe(resp => {
			console.log(resp)
		})
	}

	uniqueDisplayNameValidator() : AsyncValidatorFn {
		// TODO: this isnt the best way to do this... not really asynchronous. 
		// but we have been stuck on this for a while and need some kind of solution. this works but not ideal
		// something must be wrong with our selector or logic of previous impl.
		return (control : FormControl) => {
			if (this.getDisplayNames().includes(control.value.toLowerCase())) {
				return of({DisplayNameTaken : true})
			} else {
				return of(null);
			}
		}
	}
}
