import { VideogameConsoleReducer } from './videogame-console.reducer';
import { ActionReducer, ActionReducerMap, INIT, MetaReducer } from "@ngrx/store";
import { ContentReducer } from "./content.reducer";
import { GameReducer } from "./game.reducer";
import { GameInfoReducer } from "./game-info.reducer";
import { ForumReducer } from "./forum.reducer";
import { ForumInfoReducer } from "./forum-info.reducer";
import { Content } from 'src/app/models/content/content.model';
import { environment } from 'src/environments/environment';

export interface AppState  {
	content : Content []
}

export const reducers: ActionReducerMap<any> = {
	content : ContentReducer,
	game : GameReducer,
	gameInfo : GameInfoReducer,
	// contrib : contribReducer,
	forum : ForumReducer,
	forumInfo : ForumInfoReducer,
	videogameConsole : VideogameConsoleReducer
	// user : userReducer,
	// admin : adminReducer
}
export * from './content.reducer';
// export * from './game.reducer';
// export * from './content.reducer';
// export * from './content.reducer';
// export * from './content.reducer';

const metaDebugger = (reducer : ActionReducer<any>) : ActionReducer<any> => {
	return (state, action) => {
		console.log(`action : ${action}`);
		console.log(`state : ${state}`);
		return reducer(state, action);
	}
};

// // logout meta reducer, commented out for now
// // removes all user data from store on logout event
// const metaLogout = (reducer : ActionReducer<any>) : ActionReducer<any> => {
// 	return (state, action) => {
// 		if (action?.type = logout.type) {
// 			// you also prob dont want to do this, just get rid of private info
				// but this probably has an application some where
// 			return reducer(undefined, { type : INIT })
// 		}
// 		return reducer(state, action);
// 	}
// };
// commented out for now, because we dont have authentication
// this should also probably live in core/auth, or user module



// would use AppState but thats subject to change often.
export const metaReducers : MetaReducer<any>[] = [
	environment.production ? null : metaDebugger
];