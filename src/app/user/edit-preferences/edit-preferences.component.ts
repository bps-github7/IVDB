import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from 'src/app/models/content/Game';
import { Preferences } from 'src/app/models/user/preferences';
import { GameInfoService } from 'src/app/services/gameinfo.service';
import { PreferencesService } from 'src/app/services/preferences.service';

class UserPreferences implements Preferences {
    wouldYouPlay?: (string | Game)[];
    likes: { games: (string | Game)[]; consoles: string[]; categories: string | string[]; creators: string | string[]; platforms: string | string[]; };
    dislikes: { games: (string | Game)[]; consoles: string[]; categories: string | string[]; creators: string | string[]; platforms: string | string[]; };
    historic: { favoriteGames: string | string[]; favoriteConsoles: string | string[]; childhoodFavoriteGame: string | string[]; firstGame: string | string[]; };
    currentlyPlaying: { games: string | string[]; consoles: string | string[]; };

}

@Component({
  selector: 'app-edit-preferences',
  templateUrl: './edit-preferences.component.html',
  styleUrls: ['./edit-preferences.component.css']
})
export class EditPreferencesComponent implements OnInit {

    uid : any;
    preferences : any;
    
    categories: any[];
    creators: any[];
    platforms: any[];


    
    test;
    form : any;

    constructor(
        private fb : FormBuilder,
        
        private preferencesService : PreferencesService,
        
        private router : Router, 
        private route : ActivatedRoute,
        
        private gameInfoService : GameInfoService) {
        this.uid = this.route.snapshot.paramMap.get('uid');
        this.preferencesService.get$(this.uid).subscribe((doc) => {this.preferences = doc});
        
        this.gameInfoService.getType$('category').subscribe(p => this.categories = p);
        this.gameInfoService.getType$('creator').subscribe(p => this.creators = p);
        this.gameInfoService.getType$('platform').subscribe(p => this.platforms = p);
        
        this.form = this.fb.group({
            likes : fb.group({
                games : fb.array([]),
                onsoles : fb.array([]),
                categories : [''],
                creators : [''],
                platforms : ['']
            }),
            dislikes : fb.group({
                games : fb.array([]),
                consoles : fb.array([]),
                categories : [''],
                creators : [''],
                platforms : ['']
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
        this.preferencesService.save(preferences, this.uid)
        this.router.navigate(['/profile/',this.uid]);
   }

   //faciliates the multi input text field. Should export this to its own component at some point
   add(entry : HTMLInputElement, formControl : string) {
        console.log(entry.value);
    
       (this.form.get(formControl) as FormArray).push(new FormControl(entry.value));
       entry.value = '';
   }

    ngOnInit(): void {
        if (!this.preferencesService.exists(this.uid)) {
            this.preferences = new UserPreferences();
        }
    }

    // What is this for? why implement only a single getter?
    get games() {
    return this.form.get('likes.games') as FormArray
  }

}
