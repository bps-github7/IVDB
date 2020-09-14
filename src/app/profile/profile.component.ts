import { Component, OnInit } from '@angular/core';
import { AuthService } from '../common/services/auth.service';
import { User } from '../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    user: User;

    constructor(private auth : AuthService) {
        this.auth.appUser$.subscribe(appUser => this.user = appUser);
    }

    ngOnInit(): void {
    }

    }
