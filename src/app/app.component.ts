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
        private route: ActivatedRoute,
        private profileService : ProfileService,         
        ) {
        this.auth.user$.subscribe(user => {
            if (user) {
                this.user = user;
                //saves the most recent user date to db
                this.userService.save(user);
                localStorage.setItem("user_id", user.uid);
                //wish there was a less ham-fisted way to do this but works for now.
                localStorage.setItem("username", (user.displayName.includes(' ') ? user.displayName.split(' ').join('') : user.displayName));
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
