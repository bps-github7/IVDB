import { Observable } from 'rxjs';
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

  constructor(
		public auth : AuthService,
		private usersStore : Store<fromUsers.State> ) { }

  ngOnInit(): void {
		// hmm,. do we not have to do this because its a component of root module where we have done this already?
		this.usersStore.dispatch(readUsers())
		this.auth.user$.subscribe(user => {
			if (user) {
				this.user$ = this.usersStore.pipe(select(selectUserById(user.uid))) 
			}
		})
	}


	logout() {
		this.auth.logOut();
	}

}
