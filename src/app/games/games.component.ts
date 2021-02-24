import { Component, OnInit } from '@angular/core';
import { GameService } from '../common/services/game.service';
import { GameInfoService } from '../common/services/gameinfo.service';
import { AuthService } from '../common/services/auth.service';
import { Router } from '@angular/router';
import { CategoriesService } from '../common/services/categories.service';
import { CreatorsService } from '../common/services/creators.service';
import { ConsoleMakersService } from '../common/services/console-makers.service';

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
        private gameinfoService : GameInfoService,
        private categoriesService : CategoriesService,
        private creatorsService : CreatorsService,
        private consoleMakersService : ConsoleMakersService,
        private auth: AuthService) { 
        this.games$ = this.gameService.getAll$();
        this.gameInfo = this.gameinfoService.getAll$()
        this.categories = this.categoriesService.getAll$();
        this.creators = this.creatorsService.getAll$();
        this.console_makers = this.consoleMakersService.getAll$();
        // this.gameInfo.categories$().subscribe(c => this.categories = c);
    }
}
