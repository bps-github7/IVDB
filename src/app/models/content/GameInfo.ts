import { Game_Descriptor } from './Game_Descriptor';
import { VG_Console } from './VG_Console';

export interface GameInfo {
    microsoft?: VG_Console [],
    sony?: VG_Console [],
    nintendo?: VG_Console [],
    pc?: VG_Console [],
    categories?:  Game_Descriptor [],
    creators?: Game_Descriptor [],
    console_makers?: Game_Descriptor []
}
/* microsoft, sony, nintendo and pc contain mappings that describe
the consoles made by said console_makers 
 */
