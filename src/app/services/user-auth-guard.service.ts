import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../core/auth.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuard implements CanActivate {

    //TODO: if the userId matches the authstateID, then the user can access their profile to view/update it.
    //this is essential to production ready app
    userId;
    authId;

  constructor(private userService : UserService, private auth : AuthService) {
      this.auth.appUser$.subscribe(user => this.userId = user.uid);

   }





  canActivate() : Observable<boolean> {
      return;
  }
}
