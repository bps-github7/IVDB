import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { map } from 'rxjs';
import { User } from 'src/app/models';
import { AuthService } from '../../core/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuardService implements CanActivate {

  constructor(private auth : AuthService, private router : Router) { }

	canActivate(route, state : RouterStateSnapshot) {
		// TODO: implement this- should activate only if authenticated user is user trying to edit their own profile, comment, etc
		// need to find a way to safely transmit non-spoofable data through route params or other means (is it possible?) local storage?
		let displayName = route.snapshot.queryParamMap.get('displayName');
		
		return this.auth.user$.pipe(map(user => {
			if (user?.displayName === displayName) {
				return true;
			} else {
				this.router.navigateByUrl('/');
				return false
			}
		
		}))
	}
}
