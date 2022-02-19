import { Content } from "..";

export interface Feedback {
 id : string;
 content : Content;   
metrics : {
			liked : number,
			disliked : number,
			favorited : number,
			shared : number,
			commented : number,
			reactions : any
	},
	specifics : {
			likedBy : string [],
			dislikedBy : string [],
			favoritedBy: string [],
			sharedBy : string [],
			commentsBy : string [],
			reactions : any []
	}
}