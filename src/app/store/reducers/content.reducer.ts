import { createContent, deleteContent, readContent, updateContent, readContentSuccess } from './../actions/content.actions';
import { contentActionTypes } from '../actions/content.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector, createReducer, on } from '@ngrx/store';
// import { Content } from '../models/content/content.model';

// need to export content model from here, for this example. hopefully we can find a workaround
export interface Content {
	id: string,
	// uid?: string,
	title ?: string,
	description ?: string,
	body ?: string,
	delivered?: string;
}


export const contentAdapter = createEntityAdapter<Content>();
export interface State extends EntityState<Content> { }


export const initialState: State = contentAdapter.getInitialState();

export const ContentReducer = createReducer(
  initialState,

  on(readContentSuccess, (state, {contents}) => {
		return contentAdapter.addMany(contents, state)
		
	}),

  on(createContent, (state, action) => {
		return contentAdapter.addOne(action, state);
  }),

  on(deleteContent, (state, action) => {
    return contentAdapter.removeOne(action.id, state);
  }),

  // on(updateContent, (state, action) => {
  //   return contentAdapter.updateOne({action : action.id, data : action.play} state);
  // })
);



// create the default selectors
export const getContentState = createFeatureSelector<State>('content');

export const {
	selectIds,
	selectEntities,
	selectAll,
	selectTotal,
} = contentAdapter.getSelectors(getContentState);