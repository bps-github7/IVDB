export interface Thread {
    //administrative stuff
    isActive?:boolean;
    moderators?: string []; //perhaps this should be an array of users or moderator objects?
    
    creator: string;
    title: string;
    family : string;
    topics: string;
    description: string;
    
    // should be arrays of custom objects.
    posts?: string [];
    invitees?: string [];
}