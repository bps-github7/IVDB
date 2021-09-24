import { AuthService } from './../../core/auth.service';
import { selectUserByDisplayNameParam } from './../../../store/selectors/users.selector';
import { User } from 'src/app/models/user/user.model';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';


import * as fromUsers from 'src/app/store/reducers/users.reducer';
import * as usersActions from 'src/app/store/actions/users.actions';
import { select, Store } from '@ngrx/store';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {
	user$ : Observable<any>
	menuOpts = ["profile-info","social", "preferences", "contributions"];
	selected = "profile-info"

	currentAuthUser : any;

	constructor(private authService : AuthService,
		private usersStore : Store<fromUsers.State>) { }

	ngOnInit(): void {
		// this.usersStore.dispatch( usersActions.readUsers() )
		this.user$ = this.usersStore.pipe(select(selectUserByDisplayNameParam))
		this.authService.user$.subscribe(user => {
			console.log(user)
			this.currentAuthUser = user;
		})
	}
	logOut() {
		this.authService.logOut()
	}

	currentAuthUserOwnsProfile() {
		let firebaseUid, ngrxUid = "";

		this.user$.subscribe(user => {
			console.log("from entity")
			console.log(user)
			ngrxUid = user.uid;
		})	

		this.authService.user$.subscribe(user => {
			console.log("from firebase")
			console.log(user);

			firebaseUid = user.uid
		})

		// console.log(firebaseUid)
		// console.log(ngrxUid)
		// console.log(ngrxUid === firebaseUid)

		return (ngrxUid === firebaseUid);
	}
	
}
