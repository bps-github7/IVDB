import { Component, OnInit } from '@angular/core';
import { GameService } from '../common/services/game.service';
import { GameInfoService } from '../common/services/gameinfo.service';
import { AuthService } from '../common/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent {
    games$;
    gameInfo;
    userId: string;
    categories: any =[];
    creators: any=[];
    console_makers: any=[];

    constructor(

        private router : Router, 
        private gameService : GameService,
        private gameInfoService : GameInfoService,
        private auth: AuthService) { 
        this.games$ = this.gameService.getAll$();

        this.gameInfoService.getType$('category').subscribe(p => this.categories = p);
        this.gameInfoService.getType$('creator').subscribe(p => this.creators = p);
        this.gameInfoService.getType$('console_maker').subscribe(p => this.console_makers = p);
                
        // this.categories = this.gameinfoService.get_categories_array();
        // this.creators = this.gameinfoService.get_creators_array();
        // this.console_makers = this.gameinfoService.get_console_makers_array();
    }
}
