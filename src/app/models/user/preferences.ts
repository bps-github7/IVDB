import { Game } from '../content/game';

export interface Preferences {
    wouldYouPlay? : (string | Game) [],
    likes : {
        games : (Game | string ) [],
        //have to make consoles onsoles because there some kind of name clashing going on in edit-preferences form. real bad!
        consoles : string [],
        categories : string | string [],
        creators : string | string [],
        console_makers : string | string []
    },
    dislikes : {
        games : (Game | string ) [],
        consoles : string [],
        categories : string | string [],
        creators : string | string [],
        console_makers : string | string []
    },
    historic : {
        favoriteGames: string | string [],
        favoriteConsoles: string | string [],
        childhoodFavoriteGame: string | string[],
        firstGame : string | string[]
    },
    currentlyPlaying: {
        games : string | string[],
        consoles : string | string[]

    }
}