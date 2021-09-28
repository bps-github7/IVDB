import { firstValueFrom, lastValueFrom, map, Observable } from 'rxjs';
import { AuthService } from 'src/app/modules/core/auth.service';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as fromUsers from 'src/app/store/reducers/users.reducer';
import { readUsers } from 'src/app/store/actions/users.actions';
import { User } from 'src/app/models';
import { selectUserById, selectUserByDisplayNameExactMatch } from 'src/app/store/selectors/users.selector';
import firebase from 'firebase/app'

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

	firebaseUser: firebase.User;

	user$ : Observable<User>;

  constructor(
		public auth : AuthService,
		private usersStore : Store<fromUsers.State> ) { }

	async ngOnInit() {
		this.firebaseUser = await firstValueFrom(this.auth.getUser$())
		
		this.user$ = this.usersStore.pipe(select(selectUserById(this.firebaseUser.uid)))
		// .subscribe(res => {
		// 	console.log(res);
		// 	this.user$ = res;
		// })
	}

	logout() {
		this.auth.logOut();
	}

}
