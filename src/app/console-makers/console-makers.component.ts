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
    console_maker: any;
    gameInfo : any;

    constructor(
        private router : Router,
        private route : ActivatedRoute,
        private gameInfoService : GameInfoService) { 
            this.console_maker = this.route.snapshot.paramMap.get('name');
            this.console_makers = this.gameInfoService.get_console_makers_array();
            // console.log("from within console-maker component: " + this.console_makers);
            //executes if the route parameter is provided.
            if (this.console_maker) {
                console.log("before fn call : " + this.console_maker);
                this.console_maker = this.gameInfoService.find_console_maker(this.console_maker);
                // console.log(this.gameInfoService.find_console_maker(this.console_maker));
                console.log("after fn call: " + this.console_maker);
            }
    }

    ngOnInit(): void {
    }

}
