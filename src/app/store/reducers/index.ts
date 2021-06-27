import { ActionReducerMap } from "@ngrx/store";
import { ContentReducer } from "./content.reducer";
import { GameReducer } from "./game.reducer";
import { GameInfoReducer } from "./game-info.reducer";

export const reducers: ActionReducerMap<any> = {
	content : ContentReducer,
	game : GameReducer,
	gameInfo : GameInfoReducer
	// contrib : contribReducer,
	// forum : forumReducer,
	// forumInfo : forumInfoReducer,
	// user : userReducer,
	// admin : adminReducer
}