import { VG_Console } from './VG_Console';

export interface Game {
    title?: string,
    price?: string | number,
    imageUrl?: string,
    description?: string,
    creators?: string,
    categories?: string,
    console_Makers?: string,
    console?: VG_Console;

}