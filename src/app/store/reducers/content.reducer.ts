import { createContent, deleteContent, readContent, updateContent, readContentSuccess } from './../actions/content.actions';
import { contentActionTypes } from '../actions/content.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector, createReducer, on } from '@ngrx/store';
import { Content } from 'src/app/models/content/content.model';



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

// export const selectAllContent = selectAll;
// export const selectContentIds = selectIds;
// export const selectContentEntities = selectEntities;
// export const selectContentTotal = selectTotal;
