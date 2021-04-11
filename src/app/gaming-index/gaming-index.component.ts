import { Component, OnInit } from '@angular/core';
import { GameInfoService } from '../common/services/gameinfo.service';

@Component({
  selector: 'app-gaming-index',
  templateUrl: './gaming-index.component.html',
  styleUrls: ['./gaming-index.component.css']
})
export class GamingIndexComponent implements OnInit {

    categories: any [];
    creators: any [];
    platforms: any [];
    //you could just get the name string value from VG_Console for this, save some loading...
    sony : any [];
    nintendo: any [];
    microsoft: any [];
    pc: any [];
    web;
    mobile;


    constructor(
        private gameInfoService : GameInfoService,
        ) {
        
        
        this.gameInfoService.getType$('category').subscribe(p => this.categories = p);
        this.gameInfoService.getType$('creator').subscribe(p => this.creators = p);
        this.gameInfoService.getType$('platform').subscribe(p => this.platforms = p);

        // be better to loop over platform (less hardcoded) but not sure how to inject the
        // variable name with type script like i would use eval in python
        this.gameInfoService.getConsoleMaker$("nintendo").subscribe(p => this.nintendo = p);
        this.gameInfoService.getConsoleMaker$("sony").subscribe(p => this.sony = p);
        this.gameInfoService.getConsoleMaker$("microsoft").subscribe(p => this.microsoft = p);
        this.gameInfoService.getConsoleMaker$("pc").subscribe(p => this.pc = p);
        this.gameInfoService.getConsoleMaker$("web").subscribe(p => this.web = p);
        this.gameInfoService.getConsoleMaker$("mobile").subscribe(p => this.mobile = p);

    }

  ngOnInit(): void {
  }

  

}
