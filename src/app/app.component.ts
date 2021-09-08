import { AuthService } from 'src/app/modules/core/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as fromUsers from 'src/app/store/reducers/users.reducer';
import * as usersActions from 'src/app/store/actions/users.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
	title="IVDB"

	constructor(
		private auth : AuthService,
		private router : Router,
		private userStore : Store<fromUsers.State>
		) {}

	ngOnInit() {
		this.auth.user$.subscribe(user => {
			if (user) {
				this.router.navigateByUrl(localStorage.getItem('returnUrl'))

				// what needs to happen is going to vary based on 
				// 1. whehter this is user's first time signing in: create vs update
				// 2. who is the auth provider - google, email and password, etc? display name needs to be gotten out of local storage if not google.

				/*  
					this is why I am considering a second feature (store slice) & collection 
					for user instead of users, for user meta data- we can track both these properties
					and more (such as- have you provided preferences? did you rate this game? etc).
					with a 1-1 mapping of user id .. we can use the user id from this firebase observable
					to look up the specific user meta data and route from there based on what needs to happen...
				 */
				
				// this.userStore.dispatch( usersActions.createUser() )
			}
		})
	}

}
