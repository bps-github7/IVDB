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

	constructor(private afs : AngularFirestore) {
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
			return of({DisplayNameTaken : true});
		}
	}
}
