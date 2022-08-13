import { AuthService } from 'src/app/modules/core/auth.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, firstValueFrom } from 'rxjs';

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
			if (user) {
				this.router.navigateByUrl('/home')
				alert("Request Error: you tried to access resources only available to users who have not signed in")
				return false
			}
			return true;
		}))
	}
}
