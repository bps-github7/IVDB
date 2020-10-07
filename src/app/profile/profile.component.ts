import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../common/services/auth.service';
import { ProfileService } from '../common/services/profile.service';
import { UserService } from '../common/services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    
    user$;
    username: any;
    profile;

    constructor(private auth : AuthService,
        private router : Router,
        private route : ActivatedRoute,
        private userService : UserService,
        private profileService : ProfileService) {
            this.auth.appUser$.subscribe(appUser => this.user$ = appUser)
            // this.userService.get()
            this.username = this.route.snapshot.paramMap.get('username')
            this.profileService.get$(this.username).subscribe(resp => this.profile = resp)
    }

    ngOnInit(): void {
    }

    }
