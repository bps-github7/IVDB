import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import * as actions from '../../../../actions/game.actions';
import * as fromGame from '../../../../reducers/game.reducer';


@Component({
  selector: 'admin-game-form',
  templateUrl: './admin-game-form.component.html',
  styleUrls: ['./admin-game-form.component.sass']
})
export class AdminGameFormComponent implements OnInit {

	game: any={};
	gameInfo;
	game_categories;
	game_creators;
	game_platforms;
	id;

	constructor(
			
			// private gameInfoService: GameInfoService,
			private store : Store<fromGame.State>,
			private router : Router,
			private route : ActivatedRoute) { 
			// this.gameInfo = this.gameInfoService;
			
			
					// this.gameInfoService.getType$('category').subscribe(p => this.game_categories = p);
					// this.gameInfoService.getType$('creator').subscribe(p => this.game_creators = p);
					// this.gameInfoService.getType$('platform').subscribe(p => this.game_platforms = p);
							
					// this.game_categories = this.gameInfo.get_categories_array();
					// this.game_creators = this.gameInfo.get_creators_array();
					// this.game_console_makers = this.gameInfo.get_console_makers_array();


			

					
					this.id = this.route.snapshot.paramMap.get('id');
					
					if (this.id)
						console.log(this.id)		
					// this.gameService.get$(this.id).subscribe(g => this.game = g);

	}

	ngOnInit(): void {
	}

	save(game) {
		console.log("create a new game in the database:");
		console.log(game);
			// if(this.id) this.gameService.update(this.id, game);
			// else this.gameService.create(game);
			// this.router.navigate(['/admin/game']);
	}

	delete() {
			if (!confirm('Are you sure that you want to delete this game?')) return;
			
			// this.gameService.delete(this.id);
			this.router.navigate(['/admin/game']);
	}

}
