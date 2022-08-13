
// export interface Game {
//     id ?: string,
//     title?: string,
//     price?: string | number,
//     imageUrl?: string,
//     description?: string,
    
//     creators?: string,
//     categories?: string,
//     console_makers?: string,
//     console?: string;
// }
export interface Game {
	id: string,
	title : string,
	price?: number,
	description?: string,
	imageUrl?: string,
	categories?: string [],
	creators?: string[],
	platforms?: string [],
	consoles?: string[]
}
