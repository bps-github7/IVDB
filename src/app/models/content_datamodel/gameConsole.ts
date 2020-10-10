import { Timestamp } from 'rxjs/internal/operators/timestamp';

export interface gameConsole {
    name : string,
    qualifiedName : string,
    maker : string,
    generation : number,
    type : string,
    //technically this is a timestamp (date part only). but i cant figure out the native ts datatype for that.
    released: string
}