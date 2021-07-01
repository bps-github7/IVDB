import { getFamily } from './../../../../store/selectors/game-info.selector';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';

// examine these imports closer
import * as gameActions from 'src/app/store/actions/game.actions';
import * as fromGame from 'src/app/store/reducers/game.reducer';
import * as gameInfoActions from 'src/app/store/actions/game-info.actions'; 
import * as fromGameInfo from 'src/app/store/reducers/game-info.reducer';
import * as gameInfoSelectors from 'src/app/store/selectors/game-info.selector';



// import { filter, map } from 'rxjs/operators';

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

		this.game_categories$ = this.gameInfoStore.select(getFamily("category"))
		this.game_creators$ =  this.gameInfoStore.select(getFamily("creator"))
		this.game_platforms$ =  this.gameInfoStore.select(getFamily("platform"))

		// console.log(this.game_categories$)
		// this.game_categories$.subscribe(res => {
		// 	console.log(res)
		// })




		// console.log(this.gameInfo$)
		// this.id = this.route.snapshot.paramMap.get('id');
		
		// if (this.id)
		// 	console.log(this.id)							
	}

	save(game) {
		this.gameStore.dispatch(gameActions.createGame(game))			
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
