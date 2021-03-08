import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameInfoService } from '../common/services/gameinfo.service';

@Component({
  selector: 'app-console-makers',
  templateUrl: './console-makers.component.html',
  styleUrls: ['./console-makers.component.css']
})
export class ConsoleMakersComponent implements OnInit {

 
    //the list of all console_makers
    console_makers: any = [];
    // a specific console_maker currently selected by the user
    console_maker: any;

    //the list of consoles made by this specific console_maker
    console_list: any = [];

    gameInfo : any;

    constructor(
        private router : Router,
        private route : ActivatedRoute,


        private gameInfoService : GameInfoService) { 
            this.route.paramMap.subscribe(params => {
                this.console_maker = params.get('name');
            })
            
            this.gameInfoService.getType$('console_maker').subscribe(p => this.console_makers = p);

            
            //executes if the route parameter is provided.
            // if (this.console_maker) {
            //     this.console_maker = this.gameInfoService.find_console_maker(this.console_maker);
            //     if (this.console_maker.title.toLowerCase() === 'sony') {
            //         this.console_list = this.gameInfoService.get_sony_array();
            //     }
            //     else if (this.console_maker.title.toLowerCase() === 'nintendo') {
            //         this.console_list = this.gameInfoService.get_nintendo_array();
            //     }
            //     else if (this.console_maker.title.toLowerCase() === 'microsoft') {
            //         this.console_list = this.gameInfoService.get_microsoft_array();
            //     }
            //     else if (this.console_maker.title.toLowerCase() === 'pc') {
            //         this.console_list = this.gameInfoService.get_pc_array();
            //     }
    
            // }
    }

    ngOnInit(): void {
    }

}
