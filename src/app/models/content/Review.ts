export interface Review {
    User_Id : string,
    Game_Id : string,
    text: string,
    scores: [
        playability: number,
        replayability: number,
        graphics: number,
        audio : number,
        story: number,
        settings: number,
        characters : number,
    ],
    qualitative ? : [
        favorite_parts : string,
        least_favorite_parts : string,
        what_could_be_improved: string,
        comments: string
    ]
}