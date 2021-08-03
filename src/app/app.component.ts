import { logging } from 'protractor';
import { Observable } from 'rxjs/Observable';
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
	

	constructor(private store : Store<AppState>) {	}

	ngOnInit() {
		this.user$ = this.store.select('user');

		/// ughh this unneeded prop is so ugly. deal w it please (tomorrow || later)
		this.store.dispatch( userActions.getUser({}));
		
	}

	googleLogin() {
		console.log("got called at component level")
		this.store.dispatch( userActions.googleLogin() );
	}

	logout() {
		this.store.dispatch(  userActions.logout({}) );
	}

}
