import { firstValueFrom, Observable } from 'rxjs';
import { AuthService } from 'src/app/modules/core/auth.service';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as fromUsers from 'src/app/store/reducers/users.reducer';
import { readUsers } from 'src/app/store/actions/users.actions';
import { User } from 'src/app/models';
import { selectUserById } from 'src/app/store/selectors/users.selector';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

	user$ : Observable<User>
	user: any;

  constructor(
		public auth : AuthService,
		private usersStore : Store<fromUsers.State> ) { }

  	ngOnInit() {
		// hmm,. do we not have to do this because its a component of root module where we have done this already?
		// this.usersStore.dispatch(readUsers())

		// at the end of day, this isnt so bad... just going to be redundant / in a lot of places
		this.auth.user$.subscribe(user => {
			if (user) {
				this.user$ = this.usersStore.pipe(select(selectUserById(user.uid))) 
			}
		})
		// don't get this- works in user auth guard. not here
		// TODO: fix this, then a bunch of cleanup / contingency work with auth- still not updating from google,
		// ,,, or able to get user from entity based on auth state.
		this.user = this.getUser(); 
		console.log("hi from navbar")
		console.log(this.user);
	}

	async getUser() {
		const user = await firstValueFrom(await this.auth.getUserEntity$())
		return user;
	}

	logout() {
		this.auth.logOut();
	}

}
