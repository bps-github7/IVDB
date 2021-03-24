import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GameService } from '../../../../common/services/game.service';
import { Game } from '../../../../models/content/Game';


@Component({
    selector: 'game-card',
    templateUrl: './game-card.component.html',
    styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit {

    @Input() game_title: string;
    game: any;

    constructor(private gameService: GameService) {
        /* Need to figure out why the return type is game [] and not game.
        maybe we need to change data schema so that PK is game-title.
         */
        // this.gameService.get_id_by_title(this.game_title).subscribe((response: Game[]) => this.game = response);
        // console.log(`game name is ${this.game_title} and id is ${this.game.id}`);
    }

    ngOnInit(): void {
    }

}
