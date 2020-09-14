import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuard implements CanActivate {

    //if the userId matches the authstateID, then the user can access their profile to view/update it.
    //this is essential to release/real use of application, but beyond the scope of what im capable of doing at the moment.
    userId;
    authId;

  constructor(private userService : UserService, private auth : AuthService) {
      this.auth.appUser$.subscribe(user => this.userId = user.uid);

   }





  canActivate() : Observable<boolean> {
      return;
  }
}
