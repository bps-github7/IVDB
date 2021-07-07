import * as actions from '../actions/forum.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector, createReducer, on } from '@ngrx/store';
import { Forum } from 'src/app/models/content/forum.model';

export const forumAdapter = createEntityAdapter<Forum>();
export interface State extends EntityState<Forum> { }

const defaultForum = {
	ids: [],
	entities : {}
}

export const initialState: State = forumAdapter.getInitialState(defaultForum);

export const ForumReducer = createReducer(
  initialState,

	on(actions.readForumSuccess, (state, {forums}) => {
		return forumAdapter.addMany(forums, state)
		
	}),

  on(actions.createForum, (state, action) => {
		return forumAdapter.addOne(action, state);
  }),

  on(actions.deleteForum, (state, action) => {
    return forumAdapter.removeOne(action.id, state);
  }),

  on(actions.updateForum, (state, action) => { 
		return forumAdapter.updateOne({id : action.id, changes : action.data}, state);

  })
	
);


// create the default selectors
export const getForum = createFeatureSelector<State>('forum');

export const {
	selectIds,
	selectEntities,
	selectAll,
	selectTotal,
} = forumAdapter.getSelectors(getForum)