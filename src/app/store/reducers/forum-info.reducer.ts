import * as actions from '../actions/forum-info.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector, createReducer, on } from '@ngrx/store';
import { ForumInfo } from 'src/app/models/content/forum-info.model';

export const forumInfoAdapter = createEntityAdapter<ForumInfo>();
export interface State extends EntityState<ForumInfo> { }

const defaultForumInfo = {
	ids: [],
	entities : {}
}

export const initialState: State = forumInfoAdapter.getInitialState(defaultForumInfo);

export const ForumInfoReducer = createReducer(
  initialState,

	on(actions.readForumInfoSuccess, (state, {forumInfo}) => {
		return forumInfoAdapter.addMany(forumInfo, state)
		
	}),

  on(actions.createForumInfo, (state, action) => {
		return forumInfoAdapter.addOne(action, state);
  }),

  on(actions.deleteForumInfo, (state, action) => {
    return forumInfoAdapter.removeOne(action.id, state);
  }),

  on(actions.updateForumInfo, (state, action) => { 
		return forumInfoAdapter.updateOne({id : action.id, changes : action.data}, state);

  })
	
);


// create the default selectors
export const getForumInfo = createFeatureSelector<State>('forumInfo');

export const {
	selectIds,
	selectEntities,
	selectAll,
	selectTotal,
} = forumInfoAdapter.getSelectors(getForumInfo)