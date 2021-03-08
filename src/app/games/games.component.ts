import { Component, OnInit } from '@angular/core';
import { GameService } from '../common/services/game.service';
import { GameInfoService } from '../common/services/gameinfo.service';
import { AuthService } from '../common/services/auth.service';
import { Router } from '@angular/router';
import { TestingService } from '../common/services/testing.service';

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
        //testing only! replace with gameInfoService when testing is complete!
        private testingService : TestingService,

        private router : Router, 
        private gameService : GameService,
        private gameinfoService : GameInfoService,
        private auth: AuthService) { 
        this.games$ = this.gameService.getAll$();

        this.testingService.getType$('category').subscribe(p => this.categories = p);
        this.testingService.getType$('creator').subscribe(p => this.creators = p);
        this.testingService.getType$('console_maker').subscribe(p => this.console_makers = p);
                
        // this.categories = this.gameinfoService.get_categories_array();
        // this.creators = this.gameinfoService.get_creators_array();
        // this.console_makers = this.gameinfoService.get_console_makers_array();
    }
}
