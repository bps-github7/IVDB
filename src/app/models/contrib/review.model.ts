/* username and game_title are used to attach the review to a game and user/ simplifying queries
other than that, string value fields are for reference to other users, where as number value fields
are for that and informing user reccomendations. 
 */
export interface Review {   
	id : string;
	username : string,
	game_title : string,
	body?: string,
	playability? : number,
	replayability? : number,
	graphics? : number,
	audio ? : number,
	story? : number,
	settings? : number,
	characters ? : number,
	favorite_parts ? : string,
	least_favorite_parts ? : string,
	improvable? : string,
	comments? : string
}