import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/common/services/auth.service';
import { GameService } from 'src/app/common/services/game.service';
import { Game } from 'src/app/models/content/Game';

@Component({
  selector: 'view-game',
  templateUrl: './view-game.component.html',
  styleUrls: ['./view-game.component.css']
})
export class ViewGameComponent implements OnInit {
    game_id;
    username;
    game: Game; 

    constructor(
    private auth : AuthService,
    private gameService : GameService,
    private router : Router,
    private route : ActivatedRoute) {
        //need to be changed from snapshot to query
        this.game_id = this.route.snapshot.paramMap.get('id');
        if (this.game_id)
            this.gameService.get$(this.game_id).subscribe(g => this.game = g);
        this.username = localStorage.getItem("username"); 
        
        }

    ngOnInit(): void { }
}
