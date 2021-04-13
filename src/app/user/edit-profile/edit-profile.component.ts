import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { Profile } from 'src/app/models/user/profile';
import { ProfileService } from 'src/app/services/profile.service';

class UserProfile implements Profile {
    nickname: string;
    profileImg: string;
    backgroundImg: string;
    bio: string;
    gamerTags: string[];
    links: string[];

}

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
            //is this a valid use case for snapshot? shouldnt be any reason user returns here without ngOnInit.
            this.uid = this.route.snapshot.paramMap.get('uid');
            console.log(this.uid);
            this.profileService.get$(this.uid).subscribe((doc) => {this.profile = doc});
    }

    // just use the auth state to get user data.
    // having username in url is a n2h, non implementation detail

  ngOnInit(): void {
    if (!this.profileService.exists(this.uid)) {
        // Have a bunch of errors despite this line that should do the trick.
        // Should be resolved when we implement loading screen
        // and add it to this page.
        this.profile = new UserProfile();
        }     
    }


    save(profile) {
        this.profileService.save(profile, this.uid)
        this.router.navigate(['/']);
    }
}
