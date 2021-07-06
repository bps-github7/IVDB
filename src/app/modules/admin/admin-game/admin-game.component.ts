import { Component, OnInit, OnDestroy } from '@angular/core';
import { select, Store } from '@ngrx/store';
// import { GameService } from '../../services/game.service';
import { Subscription, Observable } from 'rxjs';
import { Game } from 'src/app/models/content/Game';
import { selectByTitleSubstring } from 'src/app/store/selectors/game.selector';
import { getFamily } from 'src/app/store/selectors/game-info.selector';
import * as gameInfoActions from 'src/app/store/actions/game-info.actions';
import * as fromGameInfo from 'src/app/store/reducers/game-info.reducer';


import * as gameActions from 'src/app/store/actions/game.actions';
import * as fromGame from 'src/app/store/reducers/game.reducer';
import { GameInfo } from 'src/app/models/content/game-info.model';
import { v4 } from 'uuid';

@Component({
  selector: 'admin-game',
  templateUrl: './admin-game.component.html',
  styleUrls: ['./admin-game.component.sass']
})
export class AdminGameComponent implements OnInit {
	
	chosen : string = "games";


	games: Game [];

	games$ : Observable<any>;
	gameInfo : any [];
	filteredGames$: Observable<any>;
	subscription: Subscription;

	constructor(
		private gameStore : Store<fromGame.State>,
		private gameInfoStore : Store<fromGameInfo.State> 
		) {
	}

	ngOnInit(): void {
		this.filteredGames$ = this.games$ =  this.gameStore.select(fromGame.selectAll)
		this.gameStore.dispatch( gameActions.readGames() );

		this.gameInfoStore.dispatch( gameInfoActions.readGameInfo() );		
		this.gameInfo = [
			{
				title : "categories",
				singular : "category",
				content : this.gameInfoStore.select(getFamily("category"))
			},
			{
				title : "creators",
				singular : "creator",
				content : this.gameInfoStore.select(getFamily("creator"))
			},
			{
				title : "platforms",
				singular : "platform",
				content : this.gameInfoStore.select(getFamily("platform"))
			}
		] 


	}



	filter(query: string) {
			this.filteredGames$ = (query) ?
					// should be a selector which gets a title that matches a substring
					this.gameStore.pipe(select(selectByTitleSubstring(query))) :
					this.games$;
			console.log(query);
	}


	createGameInfo(gameInfo : GameInfo) {
		this.gameInfoStore.dispatch( gameInfoActions.createGameInfo( {id : v4(), ...gameInfo} ) )
	}

	updateGameInfo(gameInfo : {id : string, data : Partial<GameInfo>}) {
		this.gameInfoStore.dispatch( gameInfoActions.updateGameInfo({id : gameInfo.id, data : gameInfo.data}))
	}

	deleteGameInfo(id : string) {
		this.gameInfoStore.dispatch( gameInfoActions.deleteGameInfo({id}) )
	}
}