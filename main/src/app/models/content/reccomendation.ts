/* export interface Reccomendation {
    user: string,
    game : string,
    content : string,
    playAgain : string
}
 */
/* I think you were confused about the purpose of reccomendation when
you intially implemented this- its a thing the application creates and 
is informed by ratings, revies, games the user has played and preferences. */

import { User } from '../user/user';
import { Game } from './game';
import { Metadata } from './Metadata';
import { VG_Console } from './VG_Console';

export interface Reccomendation {
    user: User,
    content : (Game | VG_Console),
    //tempted to make this optional...
    metadata : Metadata
}