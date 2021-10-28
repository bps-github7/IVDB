import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { firstValueFrom, Observable } from 'rxjs';
import { User } from 'src/app/models';
import * as fromUsers from 'src/app/store/reducers/users.reducer';
import { AuthService } from 'src/app/modules/core/auth.service';
import { selectUserById } from 'src/app/store/selectors/users.selector';
import firebase from 'firebase/app'

@Component({
  selector: 'auth-user-dropdown',
  templateUrl: './auth-user-dropdown.component.html',
  styleUrls: ['./auth-user-dropdown.component.sass']
})
export class AuthUserDropdownComponent implements OnInit {
  firebaseUser: firebase.User;
  user$ : Observable<User>

  constructor(
		public auth : AuthService,
		private usersStore : Store<fromUsers.State> ) { }

	async ngOnInit() {
		this.firebaseUser = await firstValueFrom(this.auth.getUser$())
		
		/* ideally we'd be using the getUSerEntity$ method 
		from auth service and not inject user store once again */
		this.user$ = this.usersStore.pipe(select(selectUserById(this.firebaseUser.uid)))
	}

	logout() {
		this.auth.logOut();
	}
}
