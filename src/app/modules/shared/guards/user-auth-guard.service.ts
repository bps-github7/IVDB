import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../../core/auth.service';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuardService implements CanActivate {

	currentAuthUser;
	ngrxUser;

  constructor(private auth : AuthService,  private router : Router) { }

	async canActivate(route, state : RouterStateSnapshot) : Promise<boolean> {
		/* 
			Grab unique identifier of both auth state and ngrx user entity
			canActivate will return true if both these identifiers are equal.
		*/
		
		this.currentAuthUser = await firstValueFrom(this.auth.getUser$());
		this.ngrxUser = await firstValueFrom(await this.auth.getUserEntity$());
		
		if (this.currentAuthUser?.uid === this.ngrxUser?.id) {
			return true;
		} else {
			alert("Request Error: you tried to access resources you are not authorized to view and/or edit");
			this.router.navigateByUrl("/");
		}
	}

}
