import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
// import { GameService } from '../../services/game.service';
import { Subscription, Observable } from 'rxjs';
import { Game } from 'src/app/models/content/Game';
import * as actions from '../../../store/actions/game.actions';
import * as fromGame from '../../../store/reducers/game.reducer';
// import { v4 } from 'uuid';

@Component({
  selector: 'admin-game',
  templateUrl: './admin-game.component.html',
  styleUrls: ['./admin-game.component.sass']
})
export class AdminGameComponent implements OnInit, OnDestroy {
	games: Game [];
	games$ : Observable<any>;
	filteredGames: any[];
	subscription: Subscription;

	constructor(private store : Store<fromGame.State>) {
	}

	ngOnInit(): void {
		this.games$ =  this.store.select(fromGame.selectAll)
		this.store.dispatch( actions.readGames() );
	}

	ngOnDestroy(): void {
		// this.subscription.unsubscribe();
	}


	// filter(query: string) {
	// 		this.filteredGames = (query) ?
	// 				this.games.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) :
	// 				this.games;
	// 		console.log(query);
	// }

}