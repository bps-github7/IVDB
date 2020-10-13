import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameInfoService } from '../common/services/gameinfo.service';
import { PreferencesService } from '../common/services/preferences.service';
import { Preferences } from '../models/user/preferences';


@Component({
  selector: 'app-edit-preferences',
  templateUrl: './edit-preferences.component.html',
  styleUrls: ['./edit-preferences.component.css']
})
export class EditPreferencesComponent implements OnInit {

    uid : any;
    preferences : any;
    gameInfo: any;

    constructor(private preferencesService : PreferencesService, private router : Router, private route : ActivatedRoute, private gameInfoService : GameInfoService) {
        this.uid = this.route.snapshot.paramMap.get('uid');
        this.preferencesService.get$(this.uid).subscribe((doc) => {this.preferences = doc});
        this.gameInfo = gameInfoService.gameInfo$.subscribe(resp => this.gameInfo = resp)
   }

   save(preferences) {
        this.preferencesService.create(preferences, this.uid)
        this.router.navigate(['/profile/',this.uid]);
   }

  ngOnInit(): void {
  }

}
