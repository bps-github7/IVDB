import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/common/services/category.service';
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
    categories$;
    creators$;
    consoleMakers$;
    id;

    constructor(
        private categories: CategoryService,
        private gameService : GameService,
        private router : Router,
        private route : ActivatedRoute) { 
        this.categories$ = categories.getCategories();
        this.creators$ = categories.getCreators();
        this.consoleMakers$ = categories.getConsoleMakers();
           
        
        this.id = this.route.snapshot.paramMap.get('id');
        if (this.id)
            this.game = this.gameService.get(this.id).subscribe(g =>this.game = g);

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
