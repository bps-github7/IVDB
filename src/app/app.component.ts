import { selectUserById } from './store/selectors/users.selector';
import { AuthService } from 'src/app/modules/core/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as fromUsers from 'src/app/store/reducers/users.reducer';
import * as usersActions from 'src/app/store/actions/users.actions';
import { select, Store } from '@ngrx/store';
import { User } from './models/user/user.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
	title="IVDB"
	users$: any;
	currentUser$ : Observable<User>;

	constructor(
		private auth : AuthService,
		private router : Router,
		private userStore : Store<fromUsers.State>
		) {}

	ngOnInit() {
		this.auth.user$.subscribe(user => {
			if (user) {
				this.router.navigateByUrl(localStorage.getItem('returnUrl'))
			
				// TODO: we still need to read the current user from store instead of authState, because that doesnt have displayname prop, or metadata
			}
		})
	}

}
