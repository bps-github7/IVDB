export interface Review {
    username : string,
    game_title : string,
    body?: string,   
    playability? : number,
    replayability? : number,
    graphics? : number,
    audio ? : number,
    story? : number,
    settings? : number,
    characters ? : number,
    favorite_parts ? : string,
    least_favorite_parts ? : string,
    improvable? : string,
    comments? : string
}