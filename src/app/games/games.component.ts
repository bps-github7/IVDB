import { Component, OnInit } from '@angular/core';
import { GameService } from '../common/services/game.service';
import { GameInfoService } from '../common/services/gameinfo.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent {
    games$;
    gameInfo$
    // categories$;
    // creators$;
    // consoleMakers$;

    constructor(private gameService : GameService, private gameinfoService : GameInfoService) { 
        this.games$ = gameService.getAll$();
        this.gameInfo$ = gameinfoService.getCategories$();
//         this.creators$ = gameinfoService.getCreators$();
//         this.consoleMakers$ = gameinfoService.getConsoleMakers$();
}

  do_thing(key) {
      console.log(key);
  }

}
