import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/common/services/category.service';
import { GenerateGameService } from 'src/app/common/services/generate-game.service';

@Component({
  selector: 'app-games-form',
  templateUrl: './games-form.component.html',
  styleUrls: ['./games-form.component.css']
})
export class AdminGamesFormComponent implements OnInit {
    categories$;
    creators$;
    consoleMakers$;


    constructor(private ggService : GenerateGameService) { 
        this.categories$ = ggService.getCategories();
        this.creators$ = ggService.getCreators();
        this.consoleMakers$ = ggService.getConsoleMakers();
    }

    save(game) {
        this.ggService.create(game);
    }

    ngOnInit(): void {
    }

}
