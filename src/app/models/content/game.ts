
export interface Game {
    uid ?: string,
    title?: string,
    price?: string | number,
    imageUrl?: string,
    description?: string,
    
    creators?: string,
    categories?: string,
    console_makers?: string,
    console?: string;
}