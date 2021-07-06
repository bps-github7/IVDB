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


import * as gameActions from 'src/app/store/actions/game.actions';
import * as fromGame from 'src/app/store/reducers/game.reducer';
import { GameInfo } from 'src/app/models/content/game-info.model';
import { v4 } from 'uuid';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'admin-game',
  templateUrl: './admin-game.component.html',
  styleUrls: ['./admin-game.component.sass']
})
export class AdminGameComponent implements OnInit {
	
	chosen : string = "games";


	// this is for building mat dialog forms with our reusable dialog component
	gameFormBuild = {
		title : {
			type : "text",
			formControlName : "title",
			config : {
				placeholder : "enter a title for this game"
			}
		},
		price : {
			type : "number",
			formControlName : "currency",
			config : {
				placeholder : ""
			}
		},
		description : {
			type : "textarea",
			formControlName : "description",
			config : {
				placeholder : "enter a description for this game"
			}
		},
		// need to inject the selector values in here in ngOnInit, but first, reactive form control needs to know what to do with observable data as option input
		categories : {
			type : "multiple select",
			formControlName : "categories",
			options : {},
			config : {
				placeholder : "select categories"
			}
		},
		creators : {
			type : "multiple select",
			formControlName : "creators",
			options : {},
			config : {
				placeholder : "select creators"
			}
		},
		platforms : {
			type : "multiple select",
			formControlName : "platforms",
			options : {},
			config : {
				placeholder : "select platforms"
			}
		}
		// , handle this later, its complicated and based off the platforms
		// consoles : {
		// 	type : "multiple select",
		// 	formControlName : "tags",
		// 	options : ["games", "recent release", "aniversery"],
		// 	config : {
		// 		placeholder : "add tags for this watchlist"
		// 	}
		// }
	}
	gameFormControls = {
		title : [""],
		price : [""],
		description : [""],
		categories : [""],
		creators: [""],
		platforms: [""],
		// consoles : [""]
	}



	games: Game [];

	games$ : Observable<any>;
	gameInfo : any [];
	filteredGames$: Observable<any>;
	subscription: Subscription;

	constructor(
		private gameStore : Store<fromGame.State>,
		private gameInfoStore : Store<fromGameInfo.State>, 
		private dialog : MatDialog
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
		this.gameFormBuild.categories.options = {
			async : true,
			value : this.gameInfoStore.select(getFamily("category")) 
		}
		this.gameFormBuild.creators.options = {
			async : true,
			value : this.gameInfoStore.select(getFamily("creator")) 
		}
		this.gameFormBuild.platforms.options = {
			async : true,
			value : this.gameInfoStore.select(getFamily("platform")) 
		}


	}

	// newGame() {
	// 	const config = new MatDialogConfig();
	// 	config.disableClose = true;
	// 	config.autoFocus = true;
	// 	config.height = '1600px';
	// 	config.width = `1200px`;

	// 	config.data = {
	// 		buildInfo : this.gameFormBuild,
	// 		form : this.gameFormControls,
	// 		contentType : "game"
	// 	};

	// 	this.dialog.open(DialogComponent, config)		
	// }


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