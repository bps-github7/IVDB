export interface Profile {
    id : string,
    publicProfile : {
        nickname : string,
        image : string,
        backgroundImg : string,
        bio : string;
        links : string [];
        gamertags : string []
    }
}
