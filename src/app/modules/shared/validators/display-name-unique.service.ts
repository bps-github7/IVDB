import { switchMap } from 'rxjs/operators';
import { selectUserByDisplayNameExactMatch } from './../../../store/selectors/users.selector';
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

	filteredUsers$ : Observable<any>;
	users$ : Observable<any>;

  constructor(private usersStore : Store<fromUsers.State>, private afs : AngularFirestore) {
		this.filteredUsers$ = this.users$ = this.usersStore.select(fromUsers.selectAll)
		this.usersStore.dispatch( readUsers() );
	 }




	filter(query : string) {
		this.filteredUsers$ = (query) ?
			this.usersStore.pipe(select(selectUserByDisplayNameExactMatch(query))) :
			this.users$;
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

	uniqueDisplayNameValidator() : AsyncValidatorFn {
		return (control : FormControl) => {
			// return of({DisplayNameTaken : true});
			this.filter(control.value)
			setTimeout(() => {
				console.log("got this far doe")
				this.filteredUsers$.subscribe(resp => console.log(resp));

			}, 1000)
			return of(null);

			
			// let returned;
			// setTimeout(() => {
			// 	let response;
			// 	this.filter(control.value);
			// 	this.filteredUsers$.subscribe(resp => response = resp);
			// 	returned = of((response.length === 1 ? {DisplayNameTaken : true} : null))
			// }, 1000);
			
			// // sloppy, probably better suited to use async await. this look like shit!
			// return returned
		}
	}
}
