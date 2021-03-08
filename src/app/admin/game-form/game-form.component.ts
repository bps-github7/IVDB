import { Component, OnInit } from '@angular/core';
import { GameInfoService } from 'src/app/common/services/gameinfo.service';
import { GameService } from 'src/app/common/services/game.service';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {
    game: any={};
    gameInfo;
    game_categories;
    game_creators;
    game_console_makers;
    id;

    constructor(
        
        private gameInfoService: GameInfoService,
        private gameService : GameService,
        private router : Router,
        private route : ActivatedRoute) { 
        // this.gameInfo = this.gameInfoService;
        
        
            // feel like taking game_ out of the variables would be better- another time...
            this.gameInfoService.getType$('category').subscribe(p => this.game_categories = p);
            this.gameInfoService.getType$('creator').subscribe(p => this.game_creators = p);
            this.gameInfoService.getType$('console_maker').subscribe(p => this.game_console_makers = p);
                
            // this.game_categories = this.gameInfo.get_categories_array();
            // this.game_creators = this.gameInfo.get_creators_array();
            // this.game_console_makers = this.gameInfo.get_console_makers_array();


        

            
            this.id = this.route.snapshot.paramMap.get('id');
            
            if (this.id)
                //you assigned this twice here- is that nessecary/ non-problematic?
                this.game = this.gameService.get$(this.id).subscribe(g =>this.game = g);

    }

    ngOnInit(): void {
    }

    save(game) {
        if(this.id) this.gameService.update(this.id, game);
        else this.gameService.create(game);
        this.router.navigate(['/admin/game']);
    }

    delete() {
        if (!confirm('Are you sure that you want to delete this game?')) return;
        
        this.gameService.delete(this.id);
        this.router.navigate(['/admin/game']);
    }

}
