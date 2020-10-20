import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';
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
    test;
    form : any;

    constructor(
        private fb : FormBuilder,
        private preferencesService : PreferencesService, private router : Router, private route : ActivatedRoute, private gameInfoService : GameInfoService) {
        this.uid = this.route.snapshot.paramMap.get('uid');
        this.preferencesService.get$(this.uid).subscribe((doc) => {this.preferences = doc});
        this.gameInfo = gameInfoService.gameInfo$.subscribe(resp => this.gameInfo = resp)
        this.form = this.fb.group({
            likes : fb.group({
                games : fb.array([]),
                onsoles : fb.array([]),
                categories : [''],
                creators : [''],
                console_makers : ['']
            }),
            dislikes : fb.group({
                games : fb.array([]),
                consoles : fb.array([]),
                categories : [''],
                creators : [''],
                console_makers : ['']
            }),
            historic : fb.group({
                favoriteGame : [''],
                favoriteConsole : [''],
                childhoodFavoriteGame : [''],
                firstGame : ['']
            }),
            currentlyPlaying : fb.group({
                cp_games : fb.array([]),
                cp_consoles : fb.array([])
            })
        })
   
    }

   save(preferences) {
        this.preferencesService.create(preferences, this.uid)
        this.router.navigate(['/profile/',this.uid]);
   }

   add(entry : HTMLInputElement, formControl : string) {
        console.log(entry.value);
    
       (this.form.get(formControl) as FormArray).push(new FormControl(entry.value));
       entry.value = '';
   }

  ngOnInit(): void {
  }

  get games() {
    return this.form.get('likes.games') as FormArray
  }



}
