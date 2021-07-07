export interface UserFeedback {
    metrics : {
        liked : number,
        disliked : number,
        favorited : number,
        shared : number,
        commented : number
    },
    specifics : {
        likedBy : string [],
        dislikedBy : string [],
        favoritedBy: string [],
        sharedBy : string [],
        /* concerned about both the grammar of this name choice,
         and whehter collection or collection-group is best way to store this data */
        commentsBy : string []
    }

}