import { Component, OnInit } from '@angular/core';
import { GameInfoService } from '../common/services/gameinfo.service';
import { GameDescriptor } from '../models/content/GameDescriptor';
import { VgConsole } from '../models/content/VgConsole';

@Component({
  selector: 'app-gaming-index',
  templateUrl: './gaming-index.component.html',
  styleUrls: ['./gaming-index.component.css']
})
export class GamingIndexComponent implements OnInit {

    categories: GameDescriptor [];
    creators: GameDescriptor [];
    console_makers: GameDescriptor [];
    //you could just get the name string value from VG_Console for this, save some loading...
    sony : VgConsole [];
    nintendo: VgConsole [];
    microsoft: VgConsole [];
    pc: VgConsole [];


    constructor(private gameInfoService : GameInfoService) {
        this.categories = this.gameInfoService.get_categories_array();
        this.creators = this.gameInfoService.get_creators_array();
        this.console_makers = this.gameInfoService.get_console_makers_array();
        this.sony = this.gameInfoService.get_sony_array();
        this.nintendo = this.gameInfoService.get_nintendo_array();
        this.microsoft = this.gameInfoService.get_microsoft_array();
    }

  ngOnInit(): void {
  }

  

}
