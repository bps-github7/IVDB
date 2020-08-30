import { Component, OnInit } from '@angular/core';
import { GameService } from '../common/services/game.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-game',
  templateUrl: './view-game.component.html',
  styleUrls: ['./view-game.component.css']
})
export class ViewGameComponent implements OnInit {
    id;
    game: any = {}; 

  constructor(private gameService : GameService,
    private router : Router, private route : ActivatedRoute) {

        this.id = this.route.snapshot.paramMap.get('id');
        console.log(this.id)
        if (this.id)
            this.game = this.gameService.get(this.id).subscribe(g =>this.game = g);

    }

  ngOnInit(): void {
  }

}
