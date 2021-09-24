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
		
		this.auth.user$.subscribe(user => this.currentAuthUser = user);

		this.userStore.pipe(select(selectUserByDisplayNameParam))
		.subscribe(user => this.ngrxUser = user)

		if (this.currentAuthUser.uid === this.ngrxUser.id) {
			return true;
		} else {
			this.router.navigateByUrl('/home');
			return false
		}
		// return true;
	
	}
}
