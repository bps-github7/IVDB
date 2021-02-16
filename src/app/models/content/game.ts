import { VG_Console } from './VG_Console';

export interface Game {
    uid ?: string,
    title?: string,
    price?: string | number,
    imageUrl?: string,
    description?: string,
    // Game info? 
    creators?: string,
    categories?: string,
    console_makers?: string,
    console?: VG_Console;

}