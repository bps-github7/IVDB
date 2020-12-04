import { Component, OnInit } from '@angular/core';
import { GameInfoService } from '../common/services/gameinfo.service';
import { Game_Descriptor } from '../models/content/Game_Descriptor';
import { VG_Console } from '../models/content/VG_Console';

@Component({
  selector: 'app-gaming-index',
  templateUrl: './gaming-index.component.html',
  styleUrls: ['./gaming-index.component.css']
})
export class GamingIndexComponent implements OnInit {

    categories: Game_Descriptor [];
    creators: Game_Descriptor [];
    console_makers: Game_Descriptor [];
    //you could just get the name string value from VG_Console for this, save some loading...
    sony : VG_Console [];
    nintendo: VG_Console [];
    microsoft: VG_Console [];
    pc: VG_Console [];


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
