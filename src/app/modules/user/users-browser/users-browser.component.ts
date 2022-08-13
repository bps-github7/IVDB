import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import * as fromUsers from 'src/app/store/reducers/users.reducer';
import * as usersActions from 'src/app/store/actions/users.actions';
import { select, Store } from '@ngrx/store';
import { User } from 'src/app/models/user';
import { selectUserByDisplayNameSubstring } from 'src/app/store/selectors/users.selector';


@Component({
  selector: 'app-users-browser',
  templateUrl: './users-browser.component.html',
  styleUrls: ['./users-browser.component.sass']
})
export class UsersBrowserComponent implements OnInit {
	users$: Observable<User []>;
	filteredUsers$: Observable<User []>

  constructor(private usersStore : Store<fromUsers.State>) { }

  ngOnInit(): void {
		this.users$ = this.filteredUsers$ = this.usersStore.select( fromUsers.selectAll );
		this.usersStore.dispatch( usersActions.readUsers() );
	}

	filter(query: string) {
		this.filteredUsers$ = (query) ?
				this.usersStore.pipe(select(selectUserByDisplayNameSubstring(query))) :
				this.users$;
}

}
