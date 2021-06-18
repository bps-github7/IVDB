import { ActionReducerMap } from "@ngrx/store";
// import { postReducer } from "./post.reducer";
import { simpleReducer } from "./simple.reducer";
import { ContentReducer } from "./content.reducer";

// import the reducers for each feature module below
// content
// contrib
// games
// forum
// user
// admin
// whabuta core and shared? prob not but cross the bridge when there


export const reducers: ActionReducerMap<any> = {
	// simple : simpleReducer,
	// post : postReducer,
	content : ContentReducer,
	// contrib : contribReducer,
	// games : gamesReducer,
	// forum : forumReducer,
	// user : userReducer,
	// admin : adminReducer
}