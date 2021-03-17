import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameInfoService } from '../../../common/services/gameinfo.service';
import { GameDescriptor } from '../../../models/content/GameDescriptor';
import { VgConsole } from '../../../models/content/VgConsole';

@Component({
  selector: 'platforms',
  templateUrl: './platforms.component.html',
  styleUrls: ['./platforms.component.css']
})
export class PlatformsComponent implements OnInit {
    platforms: any []; 
    metadata : any;
    console_name: string;
    console: any;
    platform: any;

    constructor(
        private router : Router,
        private route : ActivatedRoute,  
        private gameInfoService : GameInfoService) {
        
            this.gameInfoService.getType$('platform')
                .subscribe(p => this.platforms = p)

            this.route.paramMap.subscribe(params => {
                this.console_name = params.get('platform_name');
                console.log(this.console_name);
            })

            this.gameInfoService.getDocument$(this.console_name)
                .subscribe(p=> this.platform = p[0]);


            //hard coding for now, like the platforms themselves, the description is unlikely to change.
            this.metadata = { title : 'platform', plural : 'platforms', description : 'Platforms are the creators of videogame consoles, such as Nintendo, Sony and Microsoft, and/or the type of systems that support game play, such as PC or mobile'};
            // this.gameInfoService.getMetadata$('platform')
            //     .subscribe(p => this.metadata = p);

        

    

    }

    ngOnInit(): void {
    }

}
