import { Metadata } from "./Metadata";
// worry about this later...


/* An interface for a users' cmments regarding a piece of content
 */
export interface Comment {
    username: string;
    contentId: string;
    text: string;
    media?: string;
    metadata? : Metadata;
}