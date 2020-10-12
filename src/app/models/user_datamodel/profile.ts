import { Game } from '../content_datamodel/game';
import { gameConsole } from '../content_datamodel/gameConsole';
import { User } from './user';

export interface Profile {
    nickname?: string,
    profileImg?: string,
    backgroundImg?: string,
    bio?: string,
    links?: string [],
    gamerTags?: string [],
    displayPreferences? : boolean,

    //this one is informed by choice of the previous field- displayPreferences
    // displays? : []
}