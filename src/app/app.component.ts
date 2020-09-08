import { Component, OnInit } from '@angular/core';
import { AuthService } from './common/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from './common/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'ivdb';
    user;

    constructor(private auth : AuthService, private router : Router, private userService : UserService, private route: ActivatedRoute) {
        this.auth.user$.subscribe(user => {
            if (user) {
                //saves the most recent user date to db
                // this.auth.updateUserData(user);
                let returnUrl = localStorage.getItem('returnUrl');
                this.router.navigateByUrl(returnUrl);
            }
        })
    }

    // This does not do what you want it to do!!
    // ngOnInit() {
    //     this.router.navigate([this.router.url])
    // }
}
