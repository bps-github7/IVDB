import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Preferences } from 'src/app/models/user/preferences';

@Injectable({
  providedIn: 'root'
})
export class PreferencesService {

    

    constructor(private afs : AngularFirestore) {

    }


    // should type the return type to Observable<Preferences> when possible`
    get$(uid : string) {
        return this.afs.doc(`preferences/${uid}`).valueChanges(); 
    }

// getAll$() {
//     return this.profiles
// }

exists(uid : string) {
    return this.get$(uid).subscribe(preferences => {
        if (preferences) return true;
    });
} 

create(p, uid) {
    this.afs.doc(`preferences/${uid}`).set({
        likes : {
            games: p.likes.games,
            consoles: p.likes.consoles,
            categories: p.likes.categories,
            creators: p.likes.creators,
            console_makers : p.likes.console_makers
        },
        dislikes : {
            games: p.dislikes.games,
            consoles: p.dislikes.consoles,
            categories: p.dislikes.categories,
            creators: p.dislikes.creators,
            console_makers : p.dislikes.console_makers
        },
        historic: {
            favoriteGames : p.historic.favoriteGames,
            favoriteConsoles : p.historic.favoriteConsoles,
            childhoodFavoriteGame : p.historic.childhoodFavoriteGame,
            firstGame : p.historic.firstGame
        },
        currentlyPlaying: {
            games : p.currentlyPlaying.games,
            consoles : p.currentlyPlaying.consoles

        }

    
    }, {merge : true})
}
}
