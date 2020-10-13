import { Game } from '../content/game';

export interface Preferences {
    wouldYouPlay? : Game [],
    likes : {
        games : (Game | string ) []
    }
}