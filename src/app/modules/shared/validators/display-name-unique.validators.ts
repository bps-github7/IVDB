// import { uniqueDisplayNameValidator } from './display-name-unique.validators';
import { selectUserByDisplayNameExactMatch } from 'src/app/store/selectors/users.selector';
import { FormControl } from "@angular/forms";
import { Store } from '@ngrx/store';
import { map, switchMap, timer } from 'rxjs';
import {State} from 'src/app/store/reducers/users.reducer'


// export const uniqueDisplayNameValidator = (usersStore: Store<State>, time: number = 500) => {
// static uniqueDisplayNameValidator(control : FormControl) {
export const uniqueDisplayNameValidator = (control : FormControl) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (control.value === "ben") {
				resolve({DisplayNameTaken : true})
			} else {
				resolve(null);
			}
		},2000)
	})
	// return (input: FormControl) => {
	// 	return timer(time).pipe(
	// 		switchMap(() => usersStore.select(selectUserByDisplayNameExactMatch(input.value))),
	// 		map(res => {
	// 			console.log("got this far!")
	// 			console.log(res)
	// 			return res ? null : {DisplayNameTaken: true}
	// 		})
	// 	)
	// }
}