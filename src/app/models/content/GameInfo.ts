import { GameDescriptor } from './GameDescriptor';
import { VgConsole } from './VgConsole';

export interface GameInfo {
    microsoft?: VgConsole [],
    sony?: VgConsole [],
    nintendo?: VgConsole [],
    pc?: VgConsole [],
    categories?:  GameDescriptor [],
    creators?: GameDescriptor [],
    console_makers?: GameDescriptor []
}
/* microsoft, sony, nintendo and pc contain mappings that describe
the consoles made by said console_makers 
 */
