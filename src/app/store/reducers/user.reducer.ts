import * as actions from '../actions/user.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector, createReducer, on } from '@ngrx/store';
import { User } from 'src/app/models/user/user.model';

export const userAdapter = createEntityAdapter<User>();
export interface State extends EntityState<User> { }

const defaultUser = {
	ids: ['12345'],
	entities : new User('12345', 'GUEST')
}

export const initialState: State = userAdapter.getInitialState(defaultUser);

export const UserReducer = createReducer(
  initialState,

	// effect returns an action of either authenticated or notAuthenticated, not sure we need getUser to do anything
	// on(actions.getUser, (state, action) => {
	// 	return(state, action, {loading : true });
	// }),
	
	on(actions.authenticated, (state, action) => {
		return userAdapter.setOne(action.payload, {...state, loading: false})
	}),
	
	// on(actions.notAuthenticated, (state, action) => {
	// 	return userAdapter.setOne({...state, loading: false})
	// }),
	
	// on(actions.googleLogin, (state, action) => {
	// 	return userAdapter.setOne(action, {...state, loading: true})
	// }),

	// // TODO: we still need to remove the user data from entity?
	// on(actions.logout, (state, action) => {
	// 	return userAdapter.removeOne(action, {...state, loading: false})
	// }),
	
	// also not sure this is right
	on(actions.authError, (state, action) => {
		return userAdapter.setOne(action.payload, {...state, loading: false})
	}),

	// grab all the user data in the collection : [ {}] 
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
export const getUserState = createFeatureSelector<State>('user');

export const {
	selectIds,
	selectEntities,
	selectAll,
	selectTotal,
} = userAdapter.getSelectors(getUserState);