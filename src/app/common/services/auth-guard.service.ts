import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth : AuthService, private router : Router) { }

    canActivate(route, state: RouterStateSnapshot) {
        //note for the future- for RxJS --version > 6.6.2 use the pipe method
        //and use map as argument to map a user defined object to observable.
        return this.auth.user$.pipe(map(user => {
            if (user) return true;

            this.router.navigate(['/sign_in'], { queryParams: { returnUrl: state.url }});
            return false
        }))
        
        
    }
}
