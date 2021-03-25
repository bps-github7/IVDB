import { VgConsole } from './VgConsole';

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
    console?: VgConsole;

}