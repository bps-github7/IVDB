import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameInfoService } from '../common/services/gameinfo.service';
import { GameDescriptor } from '../models/content/GameDescriptor';
import { VgConsole } from '../models/content/VgConsole';

@Component({
  selector: 'platforms',
  templateUrl: './platforms.component.html',
  styleUrls: ['./platforms.component.css']
})
export class PlatformsComponent implements OnInit {
    platforms: any []; 
    console_name: string;
    console: any;

    constructor(
        private router : Router,
        private route : ActivatedRoute,  
        private gameInfoService : GameInfoService) {
        this.gameInfoService.getType$('platforms')
        .subscribe(p => this.platforms = p)

        this.route.paramMap.subscribe(params => {
            this.console_name = params.get('console_name');
            })

        this.gameInfoService.getConsoleWithName$(this.console_name)
        .subscribe(p=> this.console = p[0]);
    

    }

    ngOnInit(): void {
    }

}
