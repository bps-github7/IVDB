import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GameInfoService } from '../common/services/gameinfo.service';
import { UserService } from '../common/services/user.service';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {
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
        private userService : UserService) {
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
                this.profile = this.userService.get_profile(this.user).valueChanges().subscribe(p => this.profile = p);
                // this.userService.get_profile(this.username).valueChanges().subscribe(resp => this.profile = resp);

            //second line for how we retrieve the profile from user service or new profile service.
            }
            this.gameInfo = gameInfoService.info
        }

    ngOnInit(): void {
    }

    //should we make a new service for profile stuff, or put it in user
    //cant decide which one is more encapsulated.
    save(profile) {
        // if(this.username) this.gameService.update(this.id, game);
        // else this.gameService.create(game);
        this.router.navigate(['/admin/game']);
    }

}
