import { Component, OnInit } from '@angular/core';
import { GameService } from '../common/services/game.service';
import { CategoryService } from '../common/services/category.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent {
    games$;
    categories$;
    creators$;
    consoleMakers$;

    constructor(private gameService : GameService, private categoryService : CategoryService) { 
        this.games$ = gameService.getAll$();
        this.categories$ = categoryService.getCategories$();
        this.creators$ = categoryService.getCreators$();
        this.consoleMakers$ = categoryService.getConsoleMakers$();
  }

}
