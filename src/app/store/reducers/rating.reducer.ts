import * as actions from '../actions/rating.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector, createReducer, on } from '@ngrx/store';
import { Rating } from 'src/app/models/contrib/rating.model';

// need to export rating model from here, for this example. hopefully we can find a workaround


export const ratingAdapter = createEntityAdapter<Rating>();
export interface State extends EntityState<Rating> { }

const defaultRating = {
	ids: [],
	entities : {}
}

export const initialState: State = ratingAdapter.getInitialState(defaultRating);

export const RatingReducer = createReducer(
  initialState,

	//2. had to make action 'contents' here, action does not work.
	// contents was the identifier of variable passed to readContentSuccess
  //3. also, had to make this an object for entityAdapter to know what to do with it (even though it already was made an object)
	on(actions.readRatingsSuccess, (state, {ratings}) => {
		return ratingAdapter.addMany(ratings, state)
		
	}),

  on(actions.createRating, (state, action) => {
		return ratingAdapter.addOne(action, state);
  }),

  on(actions.deleteRating, (state, action) => {
    return ratingAdapter.removeOne(action.id, state);
  }),

	//4. updateOne method expects {id, changes : <change object emitted by firestore doc reference when updated>} 
  on(actions.updateRating, (state, action) => { 
		return ratingAdapter.updateOne({id : action.id, changes : action.data}, state);

  })
	
);


// create the default selectors
export const getRatingState = createFeatureSelector<State>('rating');

export const {
	selectIds,
	selectEntities,
	selectAll,
	selectTotal,
} = ratingAdapter.getSelectors(getRatingState);