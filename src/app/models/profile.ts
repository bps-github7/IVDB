import { Game } from './game';
import { gameConsole } from './gameConsole';
import { User } from './user';

export interface Profile {
    //id is a unique identifier, comes from 1) firebase.user.uid 2) user.id from user collection of appropriate user
    
    publicProfile?: {
        nickname?: string,
        profileImg?: string,
        backgroundImg?: string,
        bio?: string,
        links?: string [],
        gamerTags?: string [],
        displaySettings : {
            //datatype is a placeholder for now
            completionPreferences : boolean,
            displayPreferences : boolean
        }
    },
    preferences: {
        // wouldYouPlay? : Game | string [],
        likes?: {
            games?: Game | string ,
            consoles?: gameConsole | string,
            categories?: string,
            creators?: string,
            consoleMakers?: string
        },
        dislikes?: {
            games?: Game | string,
            consoles?: gameConsole | string,
            categories?: string,
            creators?: string,
            consoleMakers?: string
        },
        current?: {
            games?: Game | string,
            consoles?: gameConsole | string
        },
        historic?: {
            //diff from preferences.favorites.games because there can only be a single fav_game
            favoriteGame?: Game | string,
            favoriteConsole?: gameConsole |  string,
            firstGameEverPlayed?: Game | string,
            firstConsoleEverPlayed?: Console | string,   
            childhoodFavoriteGames?: Game | string,
        }
    }
    //should be able to cast this to user someday
    accountSettings : {
        username : string,
        email : string,
    }
    
}