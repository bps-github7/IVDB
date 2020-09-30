import { Game } from './game';

export interface Profile {
    //id is a unique identifier, comes from 1) firebase.user.uid 2) user.id from user collection of appropriate user
    id : string,
    publicProfile : {
        nickname : string,
        image : string,
        backgroundImg : string,
        bio : string;
        links : string [];
        gamertags : string []
    },
    //gotta figure this out- this fields' info needs to be U2D-ASAP.
    accountSettings : {
        // reference : User
    },
    preferences: {
        wouldYouPlay? : Game [],
        favorites : {
            games: string [],
            consoles : string [],
            categories : string [],
            creators : string [],
            consoleMakers : string []
        },
        dislikes : {
            games: string [],
            consoles : string [],
            categories : string [],
            creators : string [],
            consoleMakers : string []
        },
        //i see no difference between recentlyPurchased and current
        // recentlyPurchased : {
        //     games: string [],
        //     consoles : string []
        // },
        current : {
            games: string [],
            consoles : string []},
        historic : {
            //diff from preferences.favorites.games because there can only be a single fav_game
            favoriteGame : string,
            favoriteConsole : string,
            childhoodFavoriteGame : string,
            childhoodFavoriteConsole : string
        }
    }
    
}