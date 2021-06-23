import * as actions from '../actions/game-info.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';

export interface GameInfo {
	microsoft?: VgConsole [],
	sony?: VgConsole [],
	nintendo?: VgConsole [],
	pc?: VgConsole [],
	categories?:  GameDescriptor [],
	creators?: GameDescriptor [],
	console_makers?: GameDescriptor []
}

export const contentAdapter = createEntityAdapter<Content>();
export interface State extends EntityState<Content> { }

// const defaultContent = {
// 	ids: ['123'],
// 	entities : {
// 		'123' : {
// 			id: '123',
// 			title: 'if you are seeing this',
// 			description : '',
// 			body: 'you have reached the end of the content collection'
// 		}
// 	}
// }

export const initialState: State = contentAdapter.getInitialState();

export function ContentReducer(
	state : State = initialState,
	action : actions.ContentActions
	) {
		console.log(action.type, state);

		switch(action.type) {
			case actions.ADDED:
				return contentAdapter.addOne(action.payload, state);
		
			case actions.MODIFIED:
				return contentAdapter.updateOne({
					id : action.payload.id,
					changes: action.payload
				}, state);
		
			case actions.REMOVED:
				return contentAdapter.removeOne(action.payload.id, state);
		
			default:
				return state;
		}
}

// create the default selectors
export const getContentState = createFeatureSelector<State>('content');

export const {
	selectIds,
	selectEntities,
	selectAll,
	selectTotal,
} = contentAdapter.getSelectors(getContentState)