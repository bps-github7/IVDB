import { Component, OnInit } from '@angular/core';

// import { Router } from '@angular/router';
import * as fromGame from 'src/app/store/reducers/game.reducer';
import * as fromGameInfo from 'src/app/store/reducers/game-info.reducer';

import { readGameInfo, readGames } from 'src/app/store';
import { select, Store } from '@ngrx/store';
import { getFamily } from 'src/app/store/selectors/game-info.selector';
import { Observable } from 'rxjs';


@Component({
  selector: 'game-browser',
  templateUrl: './game-browser.component.html',
  styleUrls: ['./game-browser.component.sass']
})
export class GameBrowserComponent implements OnInit {
	games$;
	gameInfo;
	userId: string;
	categories$:Observable<any>;
	creators$: Observable<any>;
	platforms$: Observable<any>;
	consoles$: Observable<any>;


	constructor(
		// private router : Router, 
		private gameStore : Store<fromGame.State>,
		private gameInfoStore : Store<fromGameInfo.State>) { }

		ngOnInit() {
			this.games$ = this.gameStore.select(fromGame.selectAll);
			this.gameStore.dispatch( readGames() )
			this.gameInfoStore.dispatch( readGameInfo() )


			this.categories$ = this.gameInfoStore.pipe(select(getFamily("category")))
			this.creators$ = this.gameInfoStore.pipe(select(getFamily("creator")))
			this.platforms$ = this.gameInfoStore.pipe(select(getFamily("platform")))



		}
}
