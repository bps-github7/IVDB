import { Thread } from "./Thread";

export interface Forum {
    category : string;
    title : string;
    description : string;

    //optional stuff we deal with after tis fresh meatball!
    moderator?: (string | string []); 
    threads?: Thread [];
    uid?: string;
}