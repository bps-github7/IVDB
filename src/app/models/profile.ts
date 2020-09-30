import { Game } from './game';
import { gameConsole } from './gameConsole';
import { User } from './user';

export interface Profile {
    //id is a unique identifier, comes from 1) firebase.user.uid 2) user.id from user collection of appropriate user
    id : string,
    accountSettings : {
       //(db datatype - reference to doc('user/user.uid')) (ts datatype - user) 
        user: User
   },
    publicProfile?: {
        nickname?: string,
        image?: string,
        backgroundImg?: string,
        bio?: string;
        links?: string [];
        gamertags?: string []
    },
    preferences: {
        wouldYouPlay? : Game | string [],
        favorites?: {
            games?: Game | string [],
            consoles?: gameConsole | string [],
            categories?: string [],
            creators?: string [],
            consoleMakers?: string []
        },
        dislikes?: {
            games?: Game | string [],
            consoles?: gameConsole | string [],
            categories?: string [],
            creators?: string [],
            consoleMakers?: string []
        },
        current?: {
            games?: Game | string [],
            consoles?: gameConsole | string []},
        historic?: {
            //diff from preferences.favorites.games because there can only be a single fav_game
            favoriteGame?: Game | string,
            favoriteConsole?: gameConsole |  string,
            childhoodFavoriteGame?: Game | string,
            childhoodFavoriteConsole?: gameConsole | string
        }
    }
    
}