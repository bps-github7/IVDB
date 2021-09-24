import { User } from 'src/app/models/user/user.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';

import * as fromUsers from 'src/app/store/reducers/users.reducer';
import * as usersActions from 'src/app/store/actions/users.actions';
import { selectUserByDisplayNameParam } from 'src/app/store/selectors/users.selector';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.sass']
})
export class ProfileEditorComponent implements OnInit {

	form : FormGroup;
	user$ : Observable<User>;


  constructor(private usersStore : Store<fromUsers.State>) { }

  ngOnInit(): void {
		this.user$ =	this.usersStore.pipe(select(selectUserByDisplayNameParam));

		this.form = new FormGroup({

			user : new FormGroup({
				displayName : new FormControl(null),
				email : new FormControl(null),
				password : new FormControl(null),
				confirmPassword : new FormControl(null)
			}),
			profile : new FormGroup({
				nickname : new FormControl(null),
				bio : new FormControl(null),
				avatar : new FormControl(null),
				backgroundImg : new FormControl(null),
				gamerTags : new FormControl(null),
				links : new FormControl(null)
			})

		});
  }

	saveProfile() {
		console.log(this.form.value);
	}

}
