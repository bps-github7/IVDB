import { Component, OnInit } from '@angular/core';
import { GameInfoService } from '../common/services/gameinfo.service';
import { TestingService } from '../common/services/testing.service';
import { GameDescriptor } from '../models/content/GameDescriptor';
import { VgConsole } from '../models/content/VgConsole';

@Component({
  selector: 'app-gaming-index',
  templateUrl: './gaming-index.component.html',
  styleUrls: ['./gaming-index.component.css']
})
export class GamingIndexComponent implements OnInit {

    categories: any [];
    creators: any [];
    console_makers: any [];
    //you could just get the name string value from VG_Console for this, save some loading...
    sony : VgConsole [];
    nintendo: VgConsole [];
    microsoft: VgConsole [];
    pc: VgConsole [];


    constructor(
        private gameInfoService : GameInfoService,
        //testing only!
        private testingService : TestingService
        ) {
        
        
        this.testingService.getType$('category').subscribe(p => this.categories = p);
        this.testingService.getType$('creator').subscribe(p => this.creators = p);
        this.testingService.getType$('console_maker').subscribe(p => this.console_makers = p);
        
        this.sony = this.gameInfoService.get_sony_array();
        this.nintendo = this.gameInfoService.get_nintendo_array();
        this.microsoft = this.gameInfoService.get_microsoft_array();
    }

  ngOnInit(): void {
  }

  

}
