import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../../core/auth.service';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuardService implements CanActivate {

	/**
	* guards against users attempting to edit profile,
	* preferences or contributions which belong to another user. 
	*/

	currentAuthUser;
	ngrxUser;

  constructor(private auth : AuthService,  private router : Router) { }

	async canActivate(route, state : RouterStateSnapshot) : Promise<boolean> {

		// Grab unique identifier of both auth state and ngrx user entity
		this.currentAuthUser = await firstValueFrom(this.auth.getUser$());
		this.ngrxUser = await firstValueFrom(await this.auth.getUserEntity$());
		
		// reject users trying to access resources that don't belong to them
		if (this.currentAuthUser?.uid === this.ngrxUser?.id) {
			return true;
		} else {
			alert(`
				Request Error: you tried to view or edit resources
				that are private to ${this.ngrxUser.displayName}
			`);
			this.router.navigateByUrl("/home");
		}
	}

}
