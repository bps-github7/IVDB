import * as actions from '../actions/review.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector, createReducer, on } from '@ngrx/store';
import { Review } from 'src/app/models/contrib/review.model';


export const reviewAdapter = createEntityAdapter<Review>();
export interface State extends EntityState<Review> { }

const defaultReview = {
	ids: [],
	entities : {}
}

export const initialState: State = reviewAdapter.getInitialState(defaultReview);

export const ReviewReducer = createReducer(
  initialState,

	on(actions.readReviewsSuccess, (state, {reviews}) => {
		return reviewAdapter.addMany(reviews, state)
		
	}),

  on(actions.createReview, (state, action) => {
		return reviewAdapter.addOne(action, state);
  }),

  on(actions.deleteReview, (state, action) => {
    return reviewAdapter.removeOne(action.id, state);
  }),

	//4. updateOne method expects {id, changes : <change object emitted by firestore doc reference when updated>} 
  on(actions.updateReview, (state, action) => { 
		return reviewAdapter.updateOne({id : action.id, changes : action.data}, state);

  })
	
);

// create the default selectors
export const getReviewState = createFeatureSelector<State>('review');

export const {
	selectIds,
	selectEntities,
	selectAll,
	selectTotal,
} = reviewAdapter.getSelectors(getReviewState);