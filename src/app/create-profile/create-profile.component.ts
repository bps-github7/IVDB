import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GameInfoService } from '../common/services/gameinfo.service';
import { ProfileService } from '../common/services/profile.service';
import { UserService } from '../common/services/user.service';

// import { TdfFormgroupComponent } from '.././tdf-formgroup/tdf-formgroup.component';
// import { CustomInputComponent } from '.././custom-input/custom-input.component';
import { GameService } from '../common/services/game.service';



@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {
    form: any;
    user;
    games;
    gameInfo;
    profile : any={};

    //just a quick point- see game-form and its use of template driven form
    //that likely will simplify things a great bit. think about it.
    //reactive forms are better for smaller/customizable things yeah?

    // use a service to log profile info to db
    constructor(
        private fb: FormBuilder,
        private gameInfoService : GameInfoService,
        private gameService : GameService,
        private router : Router,
        private route : ActivatedRoute,
        private userService : UserService,
        private profileService : ProfileService) {
            //conflict here- should i use username or id as the query route param
            //one hurts usability, increases practicallity, the other reverses this
            this.user = this.route.snapshot.paramMap.get('username')

            this.games = this.gameService.games.subscribe(resp => this.games = resp);


            console.log("username here: " + this.user);
            // youre rellying on the user name being provided within the url. when this may not always be the case!
            
            //this line certainly not working as intended.
            if (this.user) {
                console.log("testing")
                this.profile = this.profileService.get$(this.user).subscribe(resp => this.profile = resp);
                console.log(this.profile)
            }
            this.gameInfo = gameInfoService.gameInfo$.subscribe(resp => this.gameInfo = resp)
        }

    ngOnInit(): void {
    }




    
    save(profile) {
        this.profileService.update(profile, this.user)
        this.router.navigate(['sign_in/profile/', this.user]);
    }



}
