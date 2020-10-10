import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GameInfoService } from '../common/services/gameinfo.service';
import { ProfileService } from '../common/services/profile.service';
import { UserService } from '../common/services/user.service';

// import { TdfFormgroupComponent } from '.././tdf-formgroup/tdf-formgroup.component';
// import { CustomInputComponent } from '.././custom-input/custom-input.component';
import { GameService } from '../common/services/game.service';
import { UsernameValidator } from '../common/validators/username.validators';
import { PasswordValidators } from '../common/validators/password.validators';



@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent {
    form: any;
    username;
    games;
    gameInfo;
    profile : any={};
    displayChoices = [
        {
            name: 'Public Profile',
            value : 'publicProfile'
        },
        {
            name: 'Preferences',
            value: 'preferences'
        },
        {
            name: 'Email',
            value: 'email'
        }]

    constructor(
        private fb: FormBuilder,
        private gameInfoService : GameInfoService,
        private gameService : GameService,
        private router : Router,
        private route : ActivatedRoute,
        private userService : UserService,
        private profileService : ProfileService) {
            this.username = this.route.snapshot.paramMap.get('username')
            this.games = this.gameService.games.subscribe(resp => this.games = resp);
            if (this.username) {
                this.profile = this.profileService.get$(this.username).subscribe(p => this.profile = p);
            }
            this.gameInfo = gameInfoService.gameInfo$.subscribe(resp => this.gameInfo = resp)
            this.form = fb.group({
            publicProfile : fb.group({
                nickname : [''],
                profileImg : [''],
                backgroundImg : [''],
                bio: [''],
                gamerTags: [''],
                links: [''],
                displaySettings : fb.group({
                    //same as const completionPreferences = new FormControl();
                    completionPreferences : [''],
                    displayPreferences : [''],
                    displays: fb.array([])
                })
            }),
            preferences : fb.group({
                likes : fb.group({
                    games : [' '],
                    consoles : [' '],
                    categories : [' '],
                    creators : [' '],
                    consoleMakers : [' ']
                }),
                dislikes : fb.group({
                    games : [' '],
                    consoles : [' '],
                    categories : [' '],
                    creators : [' '],
                    consoleMakers : [' ']
                }),
                historic : fb.group({
                    favoriteGame : [' '],
                    favoriteConsole : [' '],
                    firstGameEverPlayed : [' '],
                    firstConsoleEverPlayed : [' '], //stretch to say theres anything to be learned by having this data? maybe maybe not
                    //this is a multi answer
                    childhoodFavoriteGames : [' ']
                }),
                currentlyPlaying : fb.group({
                    games : [' '],
                    consoles : [' ']
                })
            }),
            accountSettings : fb.group({
                username : [{value: '', disabled: true}, [Validators.required, UsernameValidator.cannotContainSpace]],
                email : [{value: '', disabled: true}, [Validators.required, Validators.email]],
                password : [{value: '', disabled: true}, [Validators.required]]
            })
        })
    }

    get publicProfile() {
        return this.form.get('publicProfile')
    }

    get preferences() {
        return this.form.get('preferences')
    }

    get accountSettings() {
        return this.form.get('accountSettings')
    }

    save(profile) {
        this.profileService.save({
            publicProfile : this.publicProfile.value,
            preferences : this.preferences.value, 
            accountSettings : this.accountSettings.value
        }, this.username)
        this.router.navigate(['sign_in/profile/', this.username]);
    }

   

    onCheckChange(event) {
        const formArray: FormArray = this.form.get('publicProfile.displaySettings.displays') as FormArray;
      
        /* Selected */
        if(event.target.checked){
          // Add a new control in the arrayForm
          formArray.push(new FormControl(event.target.value));
        }
        /* unselected */
        else{
          // find the unselected element
          let i: number = 0;
      
          formArray.controls.forEach((ctrl: FormControl) => {
            if(ctrl.value == event.target.value) {
              // Remove the unselected element from the arrayForm
              formArray.removeAt(i);
              return;
            }      
            i++;
          });
        }
    }

}
