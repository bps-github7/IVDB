import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameInfoService } from '../common/services/gameinfo.service';

@Component({
  selector: 'app-console-makers',
  templateUrl: './console-makers.component.html',
  styleUrls: ['./console-makers.component.css']
})
export class ConsoleMakersComponent implements OnInit {

 
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
