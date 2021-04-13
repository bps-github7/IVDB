export interface ForumPost {
    text : string;
    
    //should be a user or profile so we can link back to the users profile!
    creator : string;

    thread : string;
    uid ?: string;

    // kind of dumb... just saying
    isFirst ?: boolean;

}