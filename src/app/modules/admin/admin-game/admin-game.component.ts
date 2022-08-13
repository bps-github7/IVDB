import { Component, OnInit } from '@angular/core';

// rxjs and our game model
import { Game } from 'src/app/models/content/game.model';
import { Observable } from 'rxjs';

//store stuff
import { select, Store } from '@ngrx/store';
import { selectGameByTitleSubstring } from 'src/app/store/selectors/game.selector';
import * as gameActions from 'src/app/store/actions/game.actions';
import * as fromGame from 'src/app/store/reducers/game.reducer';

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

	constructor(private gameStore : Store<fromGame.State>) {	}

	ngOnInit(): void {
		this.filteredGames$ = this.games$ =  this.gameStore.select(fromGame.selectAll)	
		this.gameStore.dispatch( gameActions.readGames() );
	}

	filter(query: string) {
			this.filteredGames$ = (query) ?
					this.gameStore.pipe(select(selectGameByTitleSubstring(query))) :
					this.games$;
	}
}