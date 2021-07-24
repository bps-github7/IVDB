import * as actions from '../actions/review.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector, createReducer, on } from '@ngrx/store';
import { Review } from 'src/app/models/contrib/review.model';

// need to export review model from here, for this example. hopefully we can find a workaround


export const reviewAdapter = createEntityAdapter<Review>();
export interface State extends EntityState<Review> { }

const defaultReview = {
	ids: [],
	entities : {}
}

export const initialState: State = reviewAdapter.getInitialState(defaultReview);

export const ReviewReducer = createReducer(
  initialState,

	//2. had to make action 'contents' here, action does not work.
	// contents was the identifier of variable passed to readContentSuccess
  //3. also, had to make this an object for entityAdapter to know what to do with it (even though it already was made an object)
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