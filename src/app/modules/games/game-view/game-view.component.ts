import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { select, Store } from '@ngrx/store';
import { Game } from 'src/app/models/content/game.model';
import * as fromGame from 'src/app/store/reducers/game.reducer';
import { readGames } from 'src/app/store';
import { selectGameByTitleParam } from 'src/app/store/selectors/game.selector';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.sass']
})
export class GameViewComponent implements OnInit {
	game$ : Observable<any>
	game: Game; 

	constructor(private gameStore : Store<fromGame.State>) { }

	ngOnInit(): void {
		this.gameStore.dispatch( readGames() )
		this.game$ = this.gameStore.pipe(select(selectGameByTitleParam))
	}
}