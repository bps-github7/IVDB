import { Observable } from 'rxjs/Observable';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GameInfo } from 'src/app/models/content/game-info.model';
import { v4 } from 'uuid';

// ngrx + our store stuff
import { Store } from '@ngrx/store';
import * as fromGameInfo from 'src/app/store/reducers/game-info.reducer';
import * as gameInfoActions from 'src/app/store/actions/game-info.actions'; 
import { selectGameInfoByFamilyAndTitleSubstring, selectGameInfoFamily } from 'src/app/store/selectors/game-info.selector';

@Component({
  selector: 'admin-game-info',
  templateUrl: './admin-game-info.component.html',
  styleUrls: ['./admin-game-info.component.sass']
})
export class AdminGameInfoComponent implements OnInit {
	/* 
	a non-routed, container component which manages game info from
	within the admin module. In template, it is nested within the admin-game
	component, accesible by choosing the game-info tab

	it handles communication with the store
	and uses the admin-dashboard-table-manager
	to faciliate CRUD ops on game-info. 

	Though it might seem like useless middleware component
	We repurposed game info so that we can reduce the boilerplate
	and hardcoded, unrelated bloat from admin-game, thus allowing
	it to better conform to S.R.P (single responsilbity [per class/object] principle )
	*/
	showMetaData : boolean = false;
	buttonText : string;
	gameInfoData : any={}
	familyChoices;

	constructor(private gameInfoStore : Store<fromGameInfo.State>) { }

	ngOnInit() {
		this.buttonText = this.showMetaData ? "hide Info" : "Show info about Game Info"
		
		this.gameInfoStore.dispatch( gameInfoActions.readGameInfo() );
	
		// TODO: prefer looping over a dynamicly loaded array of game-info families!!!
		this.gameInfoData = {
			"categories" : this.gameInfoStore.select(selectGameInfoFamily("category")),
			"creators" : this.gameInfoStore.select(selectGameInfoFamily("creator")),
			"platforms" : this.gameInfoStore.select(selectGameInfoFamily("platform"))
		} 		
		this.familyChoices = Object.keys(this.gameInfoData)
	}


	filterGameInfo(event : any) {
		const {family, singularFamilyName, query}  = event 
		if (query) {
			this.gameInfoData[family] = this.gameInfoStore.select(selectGameInfoByFamilyAndTitleSubstring(singularFamilyName, query))
		} else {
			this.gameInfoData[family] = this.gameInfoStore.select(selectGameInfoFamily(singularFamilyName));
		}
	}


	createGameInfo(content : GameInfo) {
		this.gameInfoStore.dispatch( gameInfoActions.createGameInfo({id: v4(), ...content}) )
	}

	updateGameInfo(content : Partial<GameInfo> | GameInfo ) {
		this.gameInfoStore.dispatch( gameInfoActions.updateGameInfo({id : content.id, data : content}) )
	}

	deleteGameInfo(id : string) {
		this.gameInfoStore.dispatch( gameInfoActions.deleteGameInfo({ id }) )
	}
}
