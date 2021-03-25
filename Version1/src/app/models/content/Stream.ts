import { Time } from '@angular/common';
import { User } from '../user/user';
import { VG_Console } from './VG_Console';

export interface Stream {
    game_id : string,
    start : Time,
    end : Time,
    //these details belong to Game
    // but are in here so that 
    // users can filter streams in search by this criteria
    category: string [],
    creators: string [],
    consoles : VG_Console [],
    players : (User [] | String []),
    watchers : (User [] | string [])
}