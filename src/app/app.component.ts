import { Component } from '@angular/core';
import { AuthService } from './common/services/auth.service';
import { Router } from '@angular/router';
import { UserService } from './common/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'ivdb';

    constructor(private auth : AuthService, router : Router, private userService : UserService) {
        auth.user$.subscribe(user => {
            if (user) {
                //this should be in create_account and other components where user updates profile (maybe | prob not).
                userService.save(user);
                // NOTE: ! importante ! ^^^
                let returnUrl = localStorage.getItem('returnUrl');
                router.navigateByUrl(returnUrl);
            }
        })
    }
}
