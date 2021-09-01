import { EnvService } from './services/env.service';
import { logging } from 'protractor';
import { Observable } from 'rxjs';
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
		// I think fireship example is too simple. you may nned to do one of two things:
		// 1. create a seperate store slice / feature selector for 'signedInUser'. that would be if u want to use the curremt/below very elegant syntax
		// 2. write a selector that somehow knows the id of current authenticated user and grab that patocilar one
		this.user$ = this.store.select('user');
		// INOTHERWORDS: app doesnt know when the above code fires that we want the specific user that signed in now
		this.store.dispatch( userActions.getUser());
		
	}

	googleLogin() {
		this.store.dispatch( userActions.googleLogin() );
	}

	logout() {
		this.store.dispatch(  userActions.logout() );
	}

}
