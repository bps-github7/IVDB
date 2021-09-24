import { selectUserByDisplayNameParam } from './../../../store/selectors/users.selector';
import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { map } from 'rxjs';
import { User } from 'src/app/models';
import { AuthService } from '../../core/auth.service';
import * as fromUsers from 'src/app/store/reducers/users.reducer';


@Injectable({
  providedIn: 'root'
})
export class UserAuthGuardService implements CanActivate {

	currentAuthUser;
	ngrxUser;

  constructor(private auth : AuthService, private userStore : Store<fromUsers.State>,  private router : Router) { }

	canActivate(route, state : RouterStateSnapshot) {
		/* 
			Grab unique identifier of both auth state and ngrx user entity
			canActivate will return true if both these identifiers are equal.
		*/
	
		// put this in timeout with hopes that its done executing after 5 seconds.
		setTimeout(() => {
			// read user session data from authState 
			this.auth.user$.subscribe(user => { 
				if (user) {
					this.currentAuthUser = user				
				}
			});
	
			// if the signed in user is the user tied to the displayName route param
			// they should be able to edit their profile, preferences, etc...
			this.userStore.pipe(select(selectUserByDisplayNameParam))
			.subscribe(user => {
				if (user) {
					this.ngrxUser = user
				}
			})					
		}, 5000);


		// TODO: this guy needs massive work- above not great methods for getting obsv values. stuff commented out should not be.
		// if (this.currentAuthUser && this.ngrxUser) {
			if (this.currentAuthUser?.uid == this.ngrxUser?.id) {
				return true;
			} else {
				alert("Request Error: you tried to access resources which you are not authorized to view/edit.");
				this.router.navigateByUrl('/');
				return false
			}
		// } else {
		// 	console.error("User Auth Guard Error: user credentials were not defined for both parties");
		// 	this.router.navigateByUrl('/');
		// 	return false
		// }
	}
}
