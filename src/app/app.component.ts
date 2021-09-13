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
	currentUser : any;
	userDocument : User

	constructor(
		private auth : AuthService,
		private router : Router,
		private usersStore : Store<fromUsers.State>
		) {}

	ngOnInit() {
	/* 	this.usersStore.dispatch(usersActions.readUsers());
		this.auth.user$.subscribe(user => {
			if (user) {	
				this.currentUser =  user;
				this.router.navigateByUrl(localStorage.getItem('returnUrl'))
			}
				
			this.usersStore.pipe(select(selectUserById(user?.uid)))				
			.subscribe(userDocument => { this.userDocument = userDocument })

			// whether provider is google or not determines whether
			// we have access to display name through subscription predicate or localStorage
				if (this.userDocument.metadata.provider === 'google') {
					this.usersStore.dispatch(usersActions.updateUser({ id : user.uid, data : {email : user.email, displayName : user.displayName } }));
				} else {
					if (this.userDocument.metadata.firstLogin) {
						// we only need to set the displayName like this on first login
						// so firstLogin gets flipped off in process of running this update
						this.usersStore.dispatch(usersActions.updateUser({ 
							id : this.currentUser.uid, 
							data : { 
								displayName : localStorage.getItem('displayName'),
								metadata : { 
									provider : this.userDocument.metadata.provider,
									firstLogin : false,
									hasProfile : this.userDocument.metadata.hasProfile,
									hasPreferences : this.userDocument.metadata.hasPreferences									
								}
							} 
						}))
					}
				}			
		}) */
	}

}
