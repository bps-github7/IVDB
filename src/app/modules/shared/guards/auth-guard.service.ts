import { map } from 'rxjs';
import { AuthService } from 'src/app/modules/core/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
	/**	guards against unauthenticated users accessing authenticated user routes  */
  constructor(private auth : AuthService, private router : Router) { }

	canActivate(route, state : RouterStateSnapshot) {
		return this.auth.user$.pipe(map(user => {
			if (user) {
				return true
			}
			// if the user was trying to get to a protected route, redirect them to sign-in page.
			this.router.navigate(['auth/login'],
				// then  the login method will use these query params to redirect them upon successful login
				{ queryParams : { returnUrl : state.url } }
			)
			return false;
		}))
	}
}
