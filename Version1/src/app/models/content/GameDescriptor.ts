import { Reference } from "@angular/compiler/src/render3/r3_ast";

/* an interface for game descriptors - categories, creators, console makers... 
 */
export interface GameDescriptor{
    uid: string,
    type: string,
    title: string,
    description: string,
    
    // the link will only be used by console_maker
    // possibly, to attach all consoles of certain type 
    // to a central access point. not sure about this logistically.
    link ?: string
}