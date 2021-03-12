// export interface VgConsole {
//     generation : number,
//     name : string,
//     qualifiedName : string,
//     released : string,
//     type : string,
//     maker : string,
//     uid?: string
// }

/* 
    an interface for helping to instantiate consoles
 */
export interface VgConsole {
// distinction is this- nickname is abbreviated, name is spelled out. 
// qualified name is the presentation/ product name, company name + name 

    nickname : string;
    name : string;
    qualifiedName : string;
    maker : string;
    generation : number;
    type : string;
    
    
    // optional fields folllow
    released?: any;
    image?: any;
    description?: any;
    uid?: any;
}