import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../common/services/auth.service';
import { ProfileService } from '../common/services/profile.service';
import { UserService } from '../common/services/user.service';
import { Profile } from '../models/user/profile';

@Component({
  selector: 'edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

    uid : string;
    profile : Profile;

    constructor(
        private profileService : ProfileService,
        private router : Router,
        private route : ActivatedRoute
        ) 
        {
            this.uid = this.route.snapshot.paramMap.get('uid');
            console.log(this.uid);
            this.profileService.get$(this.uid).subscribe((doc) => {this.profile = doc});
    }

    // just use the auth state to get user data.
    // having username in url is a n2h, non implementation detail - hadurh!

  ngOnInit(): void {
  }


    save(profile) {
        this.profileService.create(profile, this.uid)
        this.router.navigate(['/']);
    }
}
