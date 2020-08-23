import { Component, OnInit } from '@angular/core';
import { GenerateGameService } from 'src/app/common/services/generate-game.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class AdminGamesComponent implements OnInit {
    games$;

  constructor(private ggService : GenerateGameService) {
      this.games$ = this.ggService.getAll();
   }

  ngOnInit(): void {
  }

} 
