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