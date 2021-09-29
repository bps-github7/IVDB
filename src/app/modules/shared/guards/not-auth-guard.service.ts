import { AuthService } from 'src/app/modules/core/auth.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotAuthGuardService {
	/**
	 * NotAuthGuard prevents users from accessing authentication
	 * related resources once they are signed in.
	 */
  constructor(private auth : AuthService, private router : Router) { }

	canActivate() {
		return this.auth.user$.pipe(map(user => {
			// TODO: we have some edge case where user is logged out but cannt access auth links. figure out whats going on
			if (user) {
				return false
			}
			this.router.navigateByUrl('/home')
			return true;
		}))
	}
}
