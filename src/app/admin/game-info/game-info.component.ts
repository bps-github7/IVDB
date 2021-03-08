import { Component, OnInit } from '@angular/core';
import { GameInfoService } from 'src/app/common/services/gameinfo.service';

@Component({
  selector: 'game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.css']
})
export class GameInfoComponent implements OnInit {

  constructor(private gameInfoService : GameInfoService) { }

  ngOnInit(): void {
  }

}
