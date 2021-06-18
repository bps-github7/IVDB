import * as actions from '../actions/content.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';
// import { Content } from '../models/content/content.model';

// need to export content model from here, for this example. hopefully we can find a workaround
export interface Content {
	id: string,
	title ?: string,
	description ?: string,
	body ?: string,
	delivered?: string;
}


export const contentAdapter = createEntityAdapter<Content>();
export interface State extends EntityState<Content> { }

const defaultContent = {
	ids: [],
	entities : {}
}

export const initialState: State = contentAdapter.getInitialState(defaultContent);

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
} = contentAdapter.getSelectors(getContentState);