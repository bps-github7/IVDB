import { Content } from './content';

// I THINK we can do this without extending?

export interface News extends Content {
    content:  string
    // like, favorite
}