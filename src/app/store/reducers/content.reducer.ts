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

	//2. had to make action 'contents' here, action does not work.
	// contents was the identifier of variable passed to readContentSuccess
  //3. also, had to make this an object for entityAdapter to know what to do with it (even though it already was made an object)
	on(readContentSuccess, (state, {contents}) => {
		return contentAdapter.addMany(contents, state)
		
	}),

  on(createContent, (state, action) => {
		return contentAdapter.addOne(action, state);
  }),

  on(deleteContent, (state, action) => {
    return contentAdapter.removeOne(action.id, state);
  }),

	//4. updateOne method expects {id, changes : <change object emitted by firestore doc reference when updated>} 
  on(updateContent, (state, action) => { 
		return contentAdapter.updateOne({id : action.id, changes : action.data}, state);

  })
	
);

export const getContentState = createFeatureSelector<State>('content');

export const {
	selectIds,
	selectEntities,
	selectAll,
	selectTotal,
} = contentAdapter.getSelectors(getContentState);