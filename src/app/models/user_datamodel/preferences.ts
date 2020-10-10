import { Game } from '../content_datamodel/game';
import { gameConsole } from '../content_datamodel/gameConsole';


//note these are all arrays that can be populated with members
// of type Game or string
export interface preferences {
    wouldYouPlay? : (Game | string) [],
    likes?: {
        games?: (Game | string) [],
        consoles?: (gameConsole | string) [],

        /*eventually- as the site gets more encyclopedic, 
        youll want to define interfaces for these 
        things too- categories, creators, console_makers*/
        categories?: string [],
        creators?: string [],
        consoleMakers?: string []
    },
    dislikes?: {
        games?: (Game | string) [],
        consoles?: (gameConsole | string) [],
        categories?: string [],
        creators?: string [],
        consoleMakers?: string []
    },
    currentlyPlaying?: {
        games?: (Game | string) [],
        consoles?: (gameConsole | string) []
    },
    historic?: {
        //diff from preferences.favorites.games because there can only be a single fav_game
        favoriteGame?: (Game | string) [],
        favoriteConsole?: (gameConsole |  string) [],
        firstGameEverPlayed?: (Game | string) [],
        firstConsoleEverPlayed?: Console | string,   
        childhoodFavoriteGames?: (Game | string) [],
    }
}