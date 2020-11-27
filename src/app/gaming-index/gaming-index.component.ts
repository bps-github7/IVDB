import { Component, OnInit } from '@angular/core';
import { GameInfoService } from '../common/services/gameinfo.service';

@Component({
  selector: 'app-gaming-index',
  templateUrl: './gaming-index.component.html',
  styleUrls: ['./gaming-index.component.css']
})
export class GamingIndexComponent implements OnInit {

    gameInfo : any;

    constructor(private gameInfoService : GameInfoService) {
        this.gameInfo = this.gameInfoService.gameInfo$.subscribe(resp => this.gameInfo = resp);
    }

  ngOnInit(): void {
  }

  

}
