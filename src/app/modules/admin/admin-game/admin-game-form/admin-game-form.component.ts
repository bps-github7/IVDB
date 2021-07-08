import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
// import { map } from 'rxjs/operators';
import { v4 } from 'uuid';
import { AppState } from 'src/app/store';


// examine these imports closer
import * as gameActions from 'src/app/store/actions/game.actions';
import * as fromGame from 'src/app/store/reducers/game.reducer';
import * as gameInfoActions from 'src/app/store/actions/game-info.actions'; 
import * as fromGameInfo from 'src/app/store/reducers/game-info.reducer';
import { getFamily } from 'src/app/store/selectors/game-info.selector';


import { getGameByParam, selectEntity } from 'src/app/store/selectors/game.selector';
import { Game } from 'src/app/models/content/game.model';

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
	game$ : Observable<any>;
	game: Game;
	id: string;
	disableDeleteButton: boolean;

	constructor(
		private gameInfoStore: Store<fromGameInfo.State>,
		private gameStore : Store<fromGame.State>,
		private route : ActivatedRoute,
		private router : Router) { }

	ngOnInit(): void {
		this.gameInfo$ = this.gameInfoStore.select(fromGameInfo.selectAll)
		this.gameInfoStore.dispatch( gameInfoActions.readGameInfo() );

		// just to be safe. also note, i dont think this is efficient./ economical
		this.gameStore.dispatch( gameActions.readGames() );

		// if there is no game being updated (ie game is being created) route param 'id' will read "new"
		if (this.route.snapshot.paramMap.get('id') === "new") {

			//  if that's the case, we need default values for game, to avoid errors with NgModel
			this.game = { id : "", title : "", price : 0, description : "", categories : [], creators : [], platforms: [], consoles : []};
			
			// disable the delete button because we can't delete a game that doesnt exist yet
			this.disableDeleteButton = true;
		
		} else {
		
			// read the route param id and get game object which matches 
			this.game$ = this.gameStore.pipe(select( getGameByParam ))

			// unwrap the observable
			this.game$.subscribe((response : Game) => this.game = response);	
		
			// we can delete the game because now we have an id value of something in the database
			this.disableDeleteButton = false;
		}





		this.game_categories$ = this.gameInfoStore.select(getFamily("category"))
		this.game_creators$ =  this.gameInfoStore.select(getFamily("creator"))
		this.game_platforms$ =  this.gameInfoStore.select(getFamily("platform"))
	}

	save(game) {
		if(this.id) {
			this.gameStore.dispatch( gameActions.updateGame({id : this.id, data : game }) )
			this.router.navigate(['/admin/game']);	
		} else {
			this.gameStore.dispatch(gameActions.createGame({ id : v4(), ...game}));	
			this.router.navigate(['/admin/game']);	
		}
		}

	delete() {
		if (confirm('Are you sure that you want to delete this game?')) {
			this.gameStore.dispatch( gameActions.deleteGame({ id : this.id}) )
			this.router.navigate(['/admin/game']);
		}			
		return;
	}

}
