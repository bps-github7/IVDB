import { gameSelector, getGameByParam } from './../../../store/selectors/game.selector';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Game } from 'src/app/models/content/game.model';
import * as fromGame from 'src/app/store/reducers/game.reducer';
import { selectEntity } from 'src/app/store/selectors/game.selector';
import { AppState, readGames } from 'src/app/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.sass']
})
export class GameViewComponent implements OnInit {
	id: string;
	game$ : Observable<any>
	// game: Game; 

	constructor(
	// private auth : AuthService,
	private gameStore : Store<fromGame.State>,
	private routerStore : Store<AppState>
	// private router : Router,
	// private route : ActivatedRoute) {	}
	) { }

	ngOnInit(): void {
		this.gameStore.dispatch( readGames() )

		// this.id = this.route.snapshot.paramMap.get('id');
		// if (this.id){
		// 	this.game$ = this.gameStore.pipe(select(selectEntity(this.id)))
		// 	this.game$.subscribe((response : Game) => this.game = response);
		// }	

		this.game$ = this.routerStore.pipe(select( game ))


	}
}