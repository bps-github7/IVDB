import { Component, OnInit, OnDestroy } from '@angular/core';
import { GameService } from 'src/app/common/services/game.service';
import { Subscription } from 'rxjs';
import { Game } from 'src/app/models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit, OnDestroy {
    // trying this out for size
    // games: Game;
    games: any[];
    games$;
    filteredGames: any[];
    subscription: Subscription;

    constructor(private gameService : GameService) {
        //   ... this is probably what breaks the table.
        // this.games$ = this.gameService.getAll()
        this.subscription = gameService.getAllModified()
            .subscribe(games => {
                this.filteredGames = this.games = games;
            });    
    }

    filter(query: string) {
        //such a goofy approach. weehh
        this.filteredGames = (query) ?
            this.games.filter(p => p.payload.val().title.toLowerCase().includes(query.toLowerCase())) :
            this.games;
        console.log(query);
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    ngOnInit(): void {
    }

}
