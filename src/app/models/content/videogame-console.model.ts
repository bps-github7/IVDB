/* 
VgConsole is 
*/

export interface VideogameConsole {
    
    // name info
    nickname : string,
    name : string,
    qualifiedName : string,

    // console info
    generation : number,
    maker : string,
    family : string,
    
    // optional info
    description? : string,
    image? : string,
    released? : string,
    id? : string



}