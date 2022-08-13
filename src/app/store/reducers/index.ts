import { ReviewReducer } from './review.reducer';
import { RatingReducer } from './rating.reducer';
import { VideogameConsoleReducer } from './videogame-console.reducer';
import { ActionReducer, ActionReducerMap, MetaReducer } from "@ngrx/store";
import { ContentReducer } from "./content.reducer";
import { GameReducer } from "./game.reducer";
import { GameInfoReducer } from "./game-info.reducer";
import { ForumReducer } from "./forum.reducer";
import { ForumInfoReducer } from "./forum-info.reducer";
import { environment } from 'src/environments/environment';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { 
	Game,
	Content,
	GameInfo,
	Forum,
	ForumInfo,
	VideogameConsole,
	Thread,
	Rating,
	Review,
	Feedback,
	Suggestion,
	User,
	Preferences,
	Contribution
} from 'src/app/models';
import { SuggestionReducer } from './suggestion.reducer';
import { FeedbackReducer } from './feedback.reducer';
import { ThreadReducer } from './thread.reducer';
import { UsersReducer } from './users.reducer';
import { PreferencesReducer } from './preferences.reducer';
import { ContributionsReducer } from './contributions.reducer';

/* We implement the app State, Array of reducers and some meta reudcers in this file */
export interface AppState  {
	router : RouterReducerState<any>;
	content : ReadonlyArray<Content>;
	games : ReadonlyArray<Game>;
	gameInfo : ReadonlyArray<GameInfo>;
	forum : ReadonlyArray<Forum>;
	forumInfo : ReadonlyArray<ForumInfo>;
	videogameConsole : ReadonlyArray<VideogameConsole>;	
	thread : ReadonlyArray<Thread>;
	rating : ReadonlyArray<Rating>;
	review : ReadonlyArray<Review>;
	feedback : ReadonlyArray<Feedback>;
	suggestion : ReadonlyArray<Suggestion>;
	users : ReadonlyArray<User>;
	preferences : ReadonlyArray<Preferences>;
	contributions: ReadonlyArray<Contribution>;
}

export const reducers: ActionReducerMap<any> = {

	// ngrx specific function reducers
	router : routerReducer,

	// IVDB reducers
	content : ContentReducer,
	game : GameReducer,
	gameInfo : GameInfoReducer,
	forum : ForumReducer,
	forumInfo : ForumInfoReducer,
	videogameConsole : VideogameConsoleReducer,
	rating : RatingReducer,
	review : ReviewReducer,
	suggestion : SuggestionReducer,
	feedback : FeedbackReducer,
	thread : ThreadReducer,
	users: UsersReducer,
	preferences : PreferencesReducer,
	contributions : ContributionsReducer
}
//not sure what this does here but suspect it should get gone!
export * from './content.reducer';

const metaDebugger = (reducer : ActionReducer<any>) : ActionReducer<any> => {
	return (state, action) => {
		// // yes, commenting this out makes metaReducer pretty much pointless,
		// // but we will keep in the case where this debug output is something we need
		// // ... a lot more contol here, than random console log throughout the application src.
		// console.log("action : ",action);
		// console.log("state : ",state);
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