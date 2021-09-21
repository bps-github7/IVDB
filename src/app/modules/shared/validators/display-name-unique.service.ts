import { switchMap } from 'rxjs/operators';
import { selectUserByDisplayNameExactMatch, uniqueDisplayName } from './../../../store/selectors/users.selector';
import { AbstractControl, AsyncValidatorFn, FormControl, ValidatorFn } from '@angular/forms';
import { Injectable, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromUsers from 'src/app/store/reducers/users.reducer';
import { readUsers } from 'src/app/store/actions/users.actions';
import { catchError, delay, first, Observable, of, map } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

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

	getUsers() {
		let users, displayNames;
		this.users$.subscribe(resp => users = resp)
		users.forEach(user => displayNames.push( user.displayName.toLowerCase() ))
		console.log(users)
		console.log(displayNames)
		
		return displayNames;
	}

	userExists(displayName : string) {
		return this.getUsers().includes(displayName.toLowerCase())
	}

	testing(query) {
		this.filteredUsers$ = (query) ?
					of(this.userExists(query)) :
					of("this bitch empty... yeeet");
		this.filteredUsers$.pipe(first()).subscribe(resp => {
			console.log(resp)
		})
	}

	uniqueDisplayNameValidator() : AsyncValidatorFn {
		return (control : FormControl) => {
			return of({DisplayNameTaken : true});
		}
	}
}
