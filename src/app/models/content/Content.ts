export interface Content {
    
    /*
    Original/unique data and materials
    associated with this piece of content:
    

    description: short summary, a bio or abstract
    body : the actual content being 
    */
    uid?: number,

    title: string,
    creator: string,
    description?: string,
    body?: string,


    // extra stuff
    image?: (string | string []),
    links?: (string | string []),
    misc?: (string | string [])

    // Metadata
    created: number, // timestamp
    category: string,
    tags?: string [],


}