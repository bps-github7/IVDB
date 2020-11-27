import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameInfoService } from '../common/services/gameinfo.service';

@Component({
  selector: 'app-view-console-maker',
  templateUrl: './view-console-maker.component.html',
  styleUrls: ['./view-console-maker.component.css']
})
export class ViewConsoleMakerComponent implements OnInit {


    console_maker: any;
    gameInfo : any;

    constructor(
        private router : Router,
        private route : ActivatedRoute,
        private gameInfoService : GameInfoService) { 
        this.gameInfo = gameInfoService.gameInfo$.subscribe(resp => this.gameInfo = resp)
        
        
        this.console_maker = this.route.snapshot.paramMap.get('name');
        
        if (this.console_maker)
            console.log(this.console_maker);

            //you assigned this twice here- is that nessecary/ non-problematic?
            // this.game = this.gameService.get$(this.id).subscribe(g =>this.game = g);

    }


  ngOnInit(): void {
  }

}
