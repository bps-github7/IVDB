import { selectUserByDisplayNameExactMatch } from 'src/app/store/selectors/users.selector';
import { AsyncValidatorFn, FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromUsers from 'src/app/store/reducers/users.reducer';
import { readUsers } from 'src/app/store/actions/users.actions';
import { first, Observable, of, firstValueFrom } from 'rxjs';
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

	/* 
	 keep on running into problems because of inferred return type sub fns.
	 
	 the async await construct we are familar with returns a promise,
	 which doesnt work inside asyncValidatorFn 
	 
	 (we cant make the validator that returns async validator fn asynchronous, thus we cant use await inside
		
		solution: there is probably another syntax we can use besides async await...
		)
	*/
	getDisplayNames() {
		let displayNames = []
		this.users$.subscribe(resp => {
			resp.forEach((user : User) => {
				displayNames.push(user.displayName.toLowerCase())
			})
		})
		return displayNames;
	}

	async checkDisplayNameUniqueness(query): Promise<boolean> {
		const unique = await firstValueFrom(
			this.usersStore.pipe(select(selectUserByDisplayNameExactMatch(query)))
		)
		console.log("checkdisplayNameUnique returned:")
		console.log(unique)
		if (unique.length) {
			return true
		}
		return false
	}

	uniqueDisplayNameValidator() : AsyncValidatorFn {
		// TODO:  not really asynchronous. needs revision 

		// We could return a promise instead of observable, or use some other syntax besides async await. look into it
		return (control : FormControl) => {
				if (this.getDisplayNames().includes(control.value.toLowerCase())) {
				return of({DisplayNameTaken : true})
			} else {
				return of(null);
			}
		}
	}
}
