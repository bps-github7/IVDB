import { Component, OnInit } from '@angular/core';
import { AuthService } from '../common/services/auth.service';
import { ProfileService } from '../common/services/profile.service';
import { User } from '../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    user: User;
    profile;

    constructor(private auth : AuthService,
        private profileService : ProfileService) {
        this.auth.appUser$.subscribe(appUser => this.user = appUser);
        this.profileService.get$(this.user.username).subscribe(resp => this.profile = resp)
    }

    ngOnInit(): void {
    }

    }
