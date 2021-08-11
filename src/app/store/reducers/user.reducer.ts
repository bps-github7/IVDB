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

	///... not exactly sure how we handle this one within the entity adapter....
	// on(actions.getUser, (state, action) => {
	// 	return {state, action}
	// 	return userAdapter.setOne(...state, loading: true)
	// })

	// on(actions.authenticated, (state, action) => {
	// 	return userAdapter.setOne()
	// })


	// TODO: eventually, the reducer should do this w/ entity adapter:
	// 1. getUser : ...state, loading : true
	// 2. authenticated : ...state, ...action.payload, laoding : false
	// 3. notAuthenticated : ...state, ...defaultUser, loading : false
	// 4. googleLogin : ...state, loading : true
	// 5. facebookLogn : ...state, lading : true
	// 6. authError : ...state, ...action.payload, loading : false
	// 7. logout : ...state, ...action.payload, loading : true

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