import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {
    form: any;

    // use a service to log profile info to db
    constructor(private fb: FormBuilder) {
        this.form = fb.group({
            //just some hypotheticals here...
            public_profile: {
                nickname: [''],
                profile_image: [''],
                background: [], //can browse game screenshots, or provide their own maybe.
                gamer_tags: [''], //so users can share their xboxlive, stream account, nintendo, sony player profile
                bio: [''], // personal info.. (2x)
                links: [''],
                display_prefrences: {
                    complete_prefrences: ['right away'],
                    display_all: false,
                    select: [''] // for them to decide which preferences to display - assumes that display all is set to false

                } //let the user decide what info to share with public user network
            },
            preferences: {
                favorites: {
                    games: [''],
                    console: [''],
                    types: [''],   
                },
                current: {
                    consoles: [''],
                    playing: [''],    
                },
                historic: {
                    first_console: [''],
                    childhood_favorite: {
                        game: [''],
                        console: ['']
                    }
                },
                most_recently_purchased: {
                    console: [''],
                    game: ['']
                },
                dislikes: {
                    games: [''],
                    consoles: [''],
                    creators: [''],
                    console_makers: [''],
                    categories: ['']
                }
            },
        });
     }

    ngOnInit(): void {
    }

}
