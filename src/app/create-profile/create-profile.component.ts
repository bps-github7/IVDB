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
    username: any;
    user;
    gameInfo;

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
            this.username = this.route.snapshot.paramMap.get('username')
            //commenting this one out until the above problem is resolved.
            // if (this.username) this.user = this.userService.get(this.username) 
            this.gameInfo = gameInfoService.info
        }

    ngOnInit(): void {
    }

}
