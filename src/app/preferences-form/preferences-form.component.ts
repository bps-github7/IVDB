import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GameInfoService } from '../common/services/gameinfo.service';


@Component({
  selector: 'preferences-form',
  templateUrl: './preferences-form.component.html',
  styleUrls: ['./preferences-form.component.css']
})
export class PreferencesFormComponent implements OnInit {

    gameInfo;
    preferences;

    constructor(
        private gameinfoService : GameInfoService) { 
        this.gameInfo = this.gameinfoService.gameInfo$.subscribe(resp => this.gameInfo = resp);
    }

    ngOnInit(): void {
    }

}
