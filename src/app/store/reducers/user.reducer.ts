import * as actions from '../actions/user.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector, createReducer, on } from '@ngrx/store';
import { User } from 'src/app/models/user/user.model';

// need to export user model from here, for this example. hopefully we can find a workaround


export const userAdapter = createEntityAdapter<User>();
export interface State extends EntityState<User> { }

const defaultUser = {
	ids: [],
	entities : {}
}

export const initialState: State = userAdapter.getInitialState(defaultUser);

export const UserReducer = createReducer(
  initialState,

	//2. had to make action 'contents' here, action does not work.
	// contents was the identifier of variable passed to readContentSuccess
  //3. also, had to make this an object for entityAdapter to know what to do with it (even though it already was made an object)
	on(actions.readUsersSuccess, (state, {users}) => {
		return userAdapter.addMany(users, state)
		
	}),

  on(actions.createUser, (state, action) => {
		return userAdapter.addOne(action, state);
  }),

  on(actions.deleteUser, (state, action) => {
    return userAdapter.removeOne(action.id, state);
  }),

	//4. updateOne method expects {id, changes : <change object emitted by firestore doc reference when updated>} 
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