import * as actions from '../actions/users.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector, createReducer, on } from '@ngrx/store';
import { User } from 'src/app/models/user/user.model';

export const userAdapter = createEntityAdapter<User>();
export interface State extends EntityState<User> { }

export const initialState: State = userAdapter.getInitialState();

export const UsersReducer = createReducer(
  initialState,
	
	on(actions.readUsersSuccess, (state, {users}) => {
		return userAdapter.addMany(users, state)
	}),

  on(actions.createUser, (state, action) => {
		return userAdapter.addOne(action, state);
  }),

  on(actions.deleteUser, (state, action) => {
    return userAdapter.removeOne(action.id, state);
  }),

  on(actions.updateUser, (state, action) => { 
		return userAdapter.updateOne({id : action.id, changes : action.data}, state);

  })
	
);

// create the default selectors
export const getUsersState = createFeatureSelector<State>('users');

export const {
	selectIds,
	selectEntities,
	selectAll,
	selectTotal,
} = userAdapter.getSelectors(getUsersState);