import { selectUserByDisplayNameExactMatch } from './../../../store/selectors/users.selector';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import * as fromUsers from 'src/app/store/reducers/users.reducer';
import * as usersActions from 'src/app/store/actions/users.actions';
import { selectUserByDisplayNameSubstring } from 'src/app/store/selectors/users.selector';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.sass']
})
export class AdminUserComponent implements OnInit {

	chosen : string = "users";
	users: User [];
	users$ : Observable<any>;
	gameInfo : any [];
	filteredUsers$: Observable<any>;

	constructor(private usersStore : Store<fromUsers.State>) {	}

	ngOnInit(): void {
		this.filteredUsers$ = this.users$ =  this.usersStore.select(fromUsers.selectAll)	
		this.usersStore.dispatch( usersActions.readUsers() );
	}


	filter(query: string) {
			this.filteredUsers$ = (query) ?
					this.usersStore.pipe(select(selectUserByDisplayNameSubstring(query))) :
					this.users$;
	}

}
