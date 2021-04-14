import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameInfoService } from '../../services/gameinfo.service';

@Component({
  selector: 'platforms',
  templateUrl: './platforms.component.html',
  styleUrls: ['./platforms.component.css']
})
export class PlatformsComponent implements OnInit {
    
    // list of all the possible platforms
    platforms: any []; 
    
    //information about the gameinfo type 'platform'
    metadata : any;

    // name of the platform user wants to look at
    platform_name: string;


    // the platform user wants to look at
    platform: any;

    //list of consoles associated with the platform
    consoles: any;


    constructor(
        private router : Router,
        private route : ActivatedRoute,  
        private gameInfoService : GameInfoService) {
        
            this.gameInfoService.getType$('platform')
                .subscribe(p => this.platforms = p)

            this.route.paramMap.subscribe(params => {
                this.platform_name = params.get('platform_name');
                console.log(this.platform_name);
            })

            this.gameInfoService.getConsoleMaker$(this.platform_name)
                .subscribe(p => this.consoles = p);

            this.gameInfoService.getDocument$(this.platform_name)
                .subscribe(p=> this.platform = p[0]);


            //hard coding for now, like the platforms themselves, the description is unlikely to change.
            this.metadata = { title : 'platform', plural : 'platforms', description : 'Platforms are the creators of videogame consoles, such as Nintendo, Sony and Microsoft, and/or the type of systems that support game play, such as PC or mobile'};
            // this.gameInfoService.getMetadata$('platform')
            //     .subscribe(p => this.metadata = p);

        

    

    }

    ngOnInit(): void {
    }

}
