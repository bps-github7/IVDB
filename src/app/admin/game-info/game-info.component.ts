import { Component, OnInit } from '@angular/core';
import { GameInfoService } from '../../services/gameinfo.service';

@Component({
  selector: 'game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.css']
})
export class GameInfoComponent implements OnInit {


    categories: any = [];
    creators : any = [];
    platforms : any = [];

    constructor(private gameInfoService : GameInfoService) {

        // Hillarious, you forgot to call this, hence their undefined...
        this.getAll();
     }

    ngOnInit(): void {
    }

    getAll() {
        this.gameInfoService.getType$('category').subscribe(p => this.categories = p);
        this.gameInfoService.getType$('creator').subscribe(p => this.creators = p);
        this.gameInfoService.getType$('platform').subscribe(p => this.platforms = p);
    }

}
