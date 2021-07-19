import { VideogameConsole } from 'src/app/models/content/videogame-console.model';
import { DialogComponent } from 'src/app/modules/shared/components/dialog/dialog.component';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { select, Store } from '@ngrx/store';
// import { GameService } from '../../services/game.service';
import { Subscription, Observable } from 'rxjs';
import { Game } from 'src/app/models/content/game.model';
import { selectByTitleSubstring } from 'src/app/store/selectors/game.selector';
import { getFamily } from 'src/app/store/selectors/game-info.selector';
import * as gameInfoActions from 'src/app/store/actions/game-info.actions';
import * as fromGameInfo from 'src/app/store/reducers/game-info.reducer';

import * as fromVideogameConsole from 'src/app/store/reducers/videogame-console.reducer';
import * as consoleActions from 'src/app/store/actions/videogame-console.actions'; 


import * as gameActions from 'src/app/store/actions/game.actions';
import * as fromGame from 'src/app/store/reducers/game.reducer';
import { GameInfo } from 'src/app/models/content/game-info.model';
import { v4 } from 'uuid';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { getByMaker } from 'src/app/store/selectors/videogame-console.selector';

@Component({
  selector: 'admin-game',
  templateUrl: './admin-game.component.html',
  styleUrls: ['./admin-game.component.sass']
})
export class AdminGameComponent implements OnInit {
	
	chosen : string = "games";
	games: Game [];
	consoles : any [];
	games$ : Observable<any>;
	gameInfo : any [];
	filteredGames$: Observable<any>;
	subscription: Subscription;
	testData: any;

	constructor(
		private gameStore : Store<fromGame.State>,
		private gameInfoStore : Store<fromGameInfo.State>, 
		private consoleStore : Store<fromVideogameConsole.State>,
		private dialog : MatDialog
		) {
	}

	ngOnInit(): void {
		this.filteredGames$ = this.games$ =  this.gameStore.select(fromGame.selectAll)
	
		this.gameStore.dispatch( gameActions.readGames() );
		this.consoleStore.dispatch( consoleActions.readVideogameConsole() );
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
		this.testData = { "categories" : this.gameInfo[0].content, "creators" : this.gameInfo[1].content, "platforms" : this.gameInfo[2].content  } 
		
	this.consoles = [
		{
			title : "nintendo",
			content : this.consoleStore.select(getByMaker("nintendo"))
		},
		{
			title : "sony",
			content : this.consoleStore.select(getByMaker("sony"))
		},
		{
			title : "microsoft",
			content : this.consoleStore.select(getByMaker("microsoft"))
		},
		{
			title : "pc",
			content : this.consoleStore.select(getByMaker("pc"))
		},
		{
			title : "mobile",
			content : this.consoleStore.select(getByMaker("mobile"))
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

	createConsole(videogameConsole : VideogameConsole) {
		console.log("create method recieved this:")
		// console.log(videogameConsole)
		this.consoleStore.dispatch( consoleActions.createVideogameConsole( {id : v4(), ...videogameConsole} ) )
	}

	updateConsole(videogameConsole : {id : string, data : Partial<VideogameConsole>}) {
		console.log("update method recieved this:")
		console.log(videogameConsole.id)
		console.log(videogameConsole.data)


		// this.gameInfoStore.dispatch( gameInfoActions.updateGameInfo({id : videogameConsole.id, data : videogameConsole.data}))
	}

	deleteConsole(id : string) {
		console.log("delete method recieved this: ");
		console.log(id);
		// this.consoleStore.dispatch( consoleActions.deleteVideogameConsole({id}) )
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

	// our new event handling functions
	deleteAction(id : string) {
		console.log(`top level component recieved this ${id}`);
	}

	createAction() {
		console.log("this should make the ")
	}

}