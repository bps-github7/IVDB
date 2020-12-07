import { Component, OnInit } from '@angular/core';
import { GameService } from '../common/services/game.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Game } from '../models/content/Game';
import { UserService } from '../common/services/user.service';
import { AuthService } from '../common/services/auth.service';
import { User } from '../models/user/user';

@Component({
  selector: 'view-game',
  templateUrl: './view-game.component.html',
  styleUrls: ['./view-game.component.css']
})
export class ViewGameComponent implements OnInit {
    id;
    appUser: User;
    game: Game; 

    constructor(
    private auth : AuthService,
    private gameService : GameService,
    private router : Router,
    private route : ActivatedRoute) {

        //need to be changed from snapshot to query
        this.id = this.route.snapshot.paramMap.get('id');
        console.log(this.id)
        if (this.id)
            this.gameService.get$(this.id).subscribe(g => this.game = g);
        this.auth.appUser$.subscribe(appUser => this.appUser = appUser);        

}

ngOnInit(): void {
}

}
