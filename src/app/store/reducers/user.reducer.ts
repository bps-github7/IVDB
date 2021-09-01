import * as actions from '../actions/user.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector, createReducer, on } from '@ngrx/store';
import { User } from 'src/app/models/user/user.model';

export const userAdapter = createEntityAdapter<User>();
export interface State extends EntityState<User> { }

const defaultUser = {
	ids: [''],
	entities : new User('', 'GUEST')
}

export const initialState: State = userAdapter.getInitialState(defaultUser);

export const UserReducer = createReducer(
  initialState,

	// just set user state to loading, everything else is empty until we get a return from api
	on(actions.getUser, (state, action) => {
		return userAdapter.updateOne({...defaultUser[''], loading : true }, state);
	}),
	
	on(actions.authenticated, (state, action) => {
		// jenkily... get rid of default user before adding authenticated one. 
		userAdapter.removeOne('', state);
		return userAdapter.setOne({...action.payload, loading: false}, state)
	}),

	// TODO: better way of doing this than defaultUser[0]
	on(actions.notAuthenticated, (state, action) => {
		return userAdapter.updateOne({...defaultUser[''], loading: false}, state)
	}),
	
	on(actions.googleLogin, (state, action) => {
		return userAdapter.updateOne({...defaultUser[''], loading: true}, state)
	}),

	// // TODO: we still need to remove the user data from entity?
	on(actions.logout, (state, action) => {
		return userAdapter.removeOne({...defaultUser[''], loading: true}, state)
	}),
	
	// also not sure this is right
	on(actions.authError, (state, action) => {
		return userAdapter.setOne({...action.payload, loading: false}, state)
	}),
);

// create the default selectors
export const getUserState = createFeatureSelector<State>('user');

export const {
	selectIds,
	selectEntities,
	selectAll,
	selectTotal,
} = userAdapter.getSelectors(getUserState);