import { User } from 'firebase';

export interface News {
    title : string;
    content : {
        text: string,
        images? : string,
        links? : string,
        misc? :(string | string[])
    };
    metaData: {
        datePosted : string;
        lastUpdated : string;
        author : User; //think this should be admin or mod once thats a interface too...
    };


}