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
/* 

approach doesnt work here... yet.
because you have default selectors defined
in each reducer which use the same identifier

suppose you can look into defining your own
custom selectors (you will need to do that at some point anyhow)
and make them unique possibly, then you will be fine to export
all reducers from here (after you remove duplicate selectors from your reducers)

*/
export * from './content.reducer';
// export * from './game.reducer';
// export * from './content.reducer';
// export * from './content.reducer';
// export * from './content.reducer';
