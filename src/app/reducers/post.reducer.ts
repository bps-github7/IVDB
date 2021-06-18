// import { Post } from "../models/post.model";
// import * as PostActions from '../actions/post.actions';

// export type Action = PostActions.All;

//default app state
// const defaultState: Post = {
// 	text: 'Hi! Please dont feed dogs ham!',
	// votes: 0
// }

//helper function to create new state object
// const newState = (state, newData) => {
// 	return Object.assign({}, state, newData)
// }

// export function postReducer(state : Post, action : Action) {
// 	console.log(action.type, state);

// 	switch (action.type) {

// 		case PostActions.GET_POST:
// 			return { ...state, loading: true };

// 		case PostActions.GET_POST_SUCCESS:
// 			return { ...state, ...action.payload, loading: false };
	
// 		case PostActions.VOTE_UPDATE:
// 			return { ...state, ...action.payload, loading: true  };

// 		case PostActions.VOTE_SUCCESS:
// 			return { ...state, loading: false  };
	
// 		case PostActions.VOTE_FAIL:
// 			return { ...state, ...action.payload, loading: false  };
		
// 		default:
// 			return state;
// 		}


// }


// simpler version of post.reducer 
// import { Post } from "../models/post.model";
// import * as PostActions from '../actions/post.actions';

// export type Action = PostActions.All;

// //default app state
// const defaultState: Post = {
// 	text: 'Hi! Please dont feed dogs ham!',
// 	votes: 0
// }

// //helper function to create new state object
// const newState = (state, newData) => {
// 	return Object.assign({}, state, newData)
// }

// export function postReducer(state : Post = defaultState, action : Action) {
// 	console.log(action.type, state);

// 	switch (action.type) {
// 		case PostActions.EDIT_TEXT:
// 			return newState(state, { text: action.payload});

// 		case PostActions.UPVOTE:
// 			return newState(state, { votes : state.votes + 1 });
	
// 		case PostActions.DOWNVOTE:
// 			return newState(state, { votes: state.votes - 1 });
		
// 		case PostActions.RESET:
// 			return defaultState;

// 		default:
// 			return state;
// 		}


// }