import { Component, OnInit, OnDestroy } from '@angular/core';
// import { GameService } from '../../services/game.service';
import { Subscription } from 'rxjs';
import { Game } from 'src/app/models/content/Game';

@Component({
  selector: 'admin-game',
  templateUrl: './admin-game.component.html',
  styleUrls: ['./admin-game.component.sass']
})
export class AdminGameComponent implements OnInit, OnDestroy {
    // trying this out for size
    // games: Game;
    games: Game [];
    games$;
    filteredGames: any[];
    subscription: Subscription;

    // constructor(private gameService : GameService) {
    //     this.subscription = gameService.getAll$()
    //         .subscribe(games => {
    //             this.filteredGames = this.games = games;
    //         });    
    // }

		constructor() {
			// some dumby info to keep app from crashing until we get game reducer, actions, effects working
			this.filteredGames = [
				{title : "Call of Duty Black Ops: Cold War", price: 69.88, description: "fight 8 legged monkeys in the jungle for fun"},
				{title : "some game", price: 44.23, description: "I need to be a walrus under the sea to fight the juicy spider of the east"}
			
			]
		 }

    filter(query: string) {
        this.filteredGames = (query) ?
            this.games.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) :
            this.games;
        console.log(query);
    }

    ngOnDestroy(): void {
      // this.subscription.unsubscribe();
    }

    ngOnInit(): void {
    }

}