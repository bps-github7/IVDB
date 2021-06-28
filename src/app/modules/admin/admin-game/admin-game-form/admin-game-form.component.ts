import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import * as gameActions from '../../../../store/actions/game.actions';
import * as fromGame from '../../../../store/reducers/game.reducer';
import * as gameInfoActions from '../../../../store/actions/game-info.actions'; 
import * as fromGameInfo from '../../../../store/reducers/game-info.reducer';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'admin-game-form',
  templateUrl: './admin-game-form.component.html',
  styleUrls: ['./admin-game-form.component.sass']
})
export class AdminGameFormComponent implements OnInit {

	gameInfo$ : Observable<any>;
	game_categories$: Observable<any>;
	game_creators$: Observable<any>;
	game_platforms$: Observable<any>;

	game: any={};
	id: string;

	constructor(
			
			private gameInfoStore: Store<fromGameInfo.State>,
			private gameStore : Store<fromGame.State>,
			private router : Router,
			private route : ActivatedRoute) { }

	ngOnInit(): void {
		this.gameInfo$ = this.gameInfoStore.select(fromGameInfo.selectAll)
		this.gameInfoStore.dispatch( gameInfoActions.readGameInfo() );

		this.game_categories$ = this.gameInfo$.pipe(map(info => info.family === "category"))
		this.game_creators$ = this.gameInfo$.pipe(filter(info => info.family === "creator"))
		this.game_platforms$ = this.gameInfo$.pipe(filter(info => info.family === "platform"))

		console.log(this.game_categories$)




		console.log(this.gameInfo$)
		this.id = this.route.snapshot.paramMap.get('id');
		
		if (this.id)
			console.log(this.id)							
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
