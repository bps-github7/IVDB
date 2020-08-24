import { Component, OnInit, OnDestroy } from '@angular/core';
import { GameService } from 'src/app/common/services/game.service';
import { Subscription } from 'rxjs';

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
        this.games$ = this.gameService.getAll()
        // this.subscription = gameService.getAllModified()
        //     .subscribe(games => this.filteredGames = this.games = games);    
    }

    filter(query: HTMLInputElement) {
        //when the site is up and running
        /// we will want to perform this query on the server.
        /// major efficiency drain otherwise!!!
        // this.filteredGames = (query) ?
        //     this.games$.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) :
        //     this.games;
        console.log(query.value);
    }

    ngOnDestroy(): void {
        // this.subscription.unsubscribe();
        console.log("does a thing!");    }

    ngOnInit(): void {
    }

}

export interface Game {
    key?: string;
    title: string;
    price: number;
    category: string;
    imageUrl: string;
}