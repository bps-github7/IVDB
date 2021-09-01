import { selectAuthenticatedUser } from './store/selectors/user.selector';
import { Observable, take } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { User } from './models';
import { Store } from '@ngrx/store';
import * as userActions from 'src/app/store/actions/user.actions';

interface AppState {
	user : User;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
	title="IVDB"
	user$ : Observable<User>;
	

	constructor(private store : Store<AppState>) {}

	ngOnInit() {
		// instead- you should have two features in store- 1) users: all users with accounts 2) user : the current signed in user- can be 'guest' or authenticated user
		// this also reduces the responsiblitiy of existing feature, which now handles both authentication and user account crud
		this.store.select(selectAuthenticatedUser);
		this.store.dispatch( userActions.getUser());
		
	}

	googleLogin() {
		this.store.dispatch( userActions.googleLogin() );
	}

	logout() {
		// console.log("hello ths happened!")
		this.store.dispatch(  userActions.logout() );
	}

}
