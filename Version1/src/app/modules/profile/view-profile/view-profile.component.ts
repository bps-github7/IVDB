import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../common/services/auth.service';
import { ProfileService } from '../../../common/services/profile.service';
import { Profile } from '../../../models/user/profile';

@Component({
  selector: 'view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {


    profile: Profile;
    uid : any;



    constructor(
        private profileService : ProfileService, 
        // private auth : AuthService 
        private router : Router,
        private route : ActivatedRoute
        ) {

            // need a more reliable manner of getting user id
            // this.auth.appUser$.subscribe(appUser => this.appUser$ = appUser);
            // console.log("user id is : " + this.appUser$.uid);


            this.uid = this.route.snapshot.paramMap.get('uid');
            // console.log(this.uid);
            this.profileService.get$(this.uid).subscribe((doc) => {this.profile = doc});
            // console.log("nock name here: "+this.profile.nickname);
        }

    ngOnInit(): void {
    }

}
