import { Metadata } from "./metadata";
// worry about this later...


/* An interface for a users' cmments regarding a piece of content
 */
export interface Comment {
    uid?: string;
    username: string;
    contentId: string;
    text: string;
    media?: string;
    metadata? : Metadata;
}