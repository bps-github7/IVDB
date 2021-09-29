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

// still not super happy with this set up but it works for now
	firebaseUser: firebase.User;
	user$ : Observable<User>;

	modules = [
		"user",
		"content",
		"games",
		"forum",
		"admin"
	]

	// this is still redundant except in cases where the route is complex for example 'user/profile/edit'

	// I suggest two configuration/ enhancements-
	// 1) ability to pass another nested dropdown as a link object, which dropdown will know how to render recursively (flex ur angular muscles son!)
	// 2) if the Link is an object, assume that its a complex link where {text : 'simple phrase', url : 'some/nested/route' }
	// 	otherwise, the link is a string and we just need to prepend a slash for it to be a working link
	children = {
		// 'users' : [

		// ],
		'content' : [
			'streams',
			'news',
			'watchlists',
			'reviews',
			'groups'
		],
		'admin' : [
			'game',
			'forum',
			'user',
			'content'
		],
		'games' : [],
		'forum' : [],
		'user' : []
		// 'games' : [
		// 	'browse',
		// 	//this is an example of a potential nested link
		// 	'game-info', 
		// 	/*  { 'game-info' : [
		// 		'categories',
		// 		'creators',
		// 		'console makers',
		// 		'consoles'
		// 	]}
		// 	 */
			
		// 	// some potential ideas for complex link objects
		// 	// 'rate',
		// 	// 'top games'
		// ],
		// 'forum': [],
		// 'users': [
		// 	'browse',
		// 	'connect'
		// ],
	} 



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
