import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as fromUsers from 'src/app/store/reducers/users.reducer';
import * as usersActions from 'src/app/store/actions/users.actions';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-users-browser',
  templateUrl: './users-browser.component.html',
  styleUrls: ['./users-browser.component.sass']
})
export class UsersBrowserComponent implements OnInit {
	users$: Observable<User []>;

  constructor(private usersStore : Store<fromUsers.State>) { }

  ngOnInit(): void {
		this.users$ = this.usersStore.select( fromUsers.selectAll );
		this.usersStore.dispatch( usersActions.readUsers() );
	}

}
