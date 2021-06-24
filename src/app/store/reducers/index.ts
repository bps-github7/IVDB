import { ActionReducerMap } from "@ngrx/store";
// import { postReducer } from "./post.reducer";
import { ContentReducer } from "./content.reducer";
import { GameReducer } from "./game.reducer";
import { GameInfoReducer } from "./game-info.reducer";
// import the reducers for each feature module below
// content
// contrib
// games
// forum
// user
// admin
// whabuta core and shared? prob not but cross the bridge when there


export const reducers: ActionReducerMap<any> = {
	content : ContentReducer,
	game : GameReducer,
	gameInfo : GameInfoReducer
	// contrib : contribReducer,
	// forum : forumReducer,
	// user : userReducer,
	// admin : adminReducer
}