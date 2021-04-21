import { Component, Injectable, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './core/auth.service';
import { ProfileService } from './services/profile.service';
import { UserService } from './services/user.service';
// import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
    title = 'ivdb';

    //would be helpful if this could cast to User.
    user: any;
    displayName;
    
    constructor(
        private auth : AuthService,
        private router : Router,
        private userService : UserService,
        // private route: ActivatedRoute,
        // private profileService : ProfileService,         
        ) {

        //TODO: get rid of this whole jawn/ unneeded, but relied on throughout the app!...
        this.auth.user$.subscribe(user => {
            if (user) {
                this.user = user;

                //save the most recent user date to db
                // this.userService.save(this.user);
                

                /* PLEASE use auth state and not local storage to keep userID and display name avialble throughout app!!! */
                localStorage.setItem("user_id", this.user.uid);
                localStorage.setItem("username", (this.user.displayName.includes(' ') ? this.user.displayName.split(' ').join('') : this.user.displayName));
                
                let returnUrl = localStorage.getItem('returnUrl');
                this.router.navigateByUrl(returnUrl);
            }
        });
    }

    // This does not do what you want it to do!!
    // ngOnInit() {
    //     this.router.navigate([this.router.url])
    // }   
}
