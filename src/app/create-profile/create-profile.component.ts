import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GameInfoService } from '../common/services/gameinfo.service';
import { ProfileService } from '../common/services/profile.service';
import { UserService } from '../common/services/user.service';
import { TdfFormgroupComponent } from '.././tdf-formgroup/tdf-formgroup.component';



@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {
    _links = [];
    _gamerTags = [];
    form: any;
    user;
    gameInfo;
    profile : any={};

    //just a quick point- see game-form and its use of template driven form
    //that likely will simplify things a great bit. think about it.
    //reactive forms are better for smaller/customizable things yeah?

    // use a service to log profile info to db
    constructor(
        private fb: FormBuilder,
        private gameInfoService : GameInfoService,
        private router : Router,
        private route : ActivatedRoute,
        private userService : UserService,
        private profileService : ProfileService) {
            //conflict here- should i use username or id as the query route param
            //one hurts usability, increases practicallity, the other reverses this
            this.user = this.route.snapshot.paramMap.get('username')

            // 1) i think you shouldnt use username as primary key/ uid in implementation details,
            //    but doing so in this context is acceptable: just grab uid and use it to get the username.

            // 2) this inadvertently deals with the userAuth-guard problem, as only the logged in user will
            //    be able to supply uid.

            //commenting this one out until the above problem is resolved.
            // i think this needs to be done with observables.
            if (this.user) {
                this.profile = this.profileService.get$(this.user).subscribe(next => this.profile = next);
                // this.userService.get_profile(this.username).valueChanges().subscribe(resp => this.profile = resp);

            //second line for how we retrieve the profile from user service or new profile service.
            }
            this.gameInfo = gameInfoService.info
        }

    ngOnInit(): void {
    }

    add_link(input : HTMLInputElement) {
        if (input.value === '') return false;

        this._links.push(input.value);
        input.value = '';
    }

    add_gamerTag(input : HTMLInputElement) {
        if (input.value === '') return false;

        this._gamerTags.push(input.value);
        input.value = '';
    } 

    
    save(profile) {
        //does the profile exist already- then update it 
        if (this.user) this.profileService.update(profile);

        //no? make a new one
        else this.profileService.create(profile);
        this.router.navigate(['/admin/game']);
    }



}
