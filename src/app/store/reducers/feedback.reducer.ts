import * as actions from '../actions/feedback.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector, createReducer, on } from '@ngrx/store';
import { Feedback } from 'src/app/models/contrib/feedback.model';

// need to export feedback model from here, for this example. hopefully we can find a workaround


export const feedbackAdapter = createEntityAdapter<Feedback>();
export interface State extends EntityState<Feedback> { }

const defaultFeedback = {
	ids: [],
	entities : {}
}

export const initialState: State = feedbackAdapter.getInitialState(defaultFeedback);

export const FeedbackReducer = createReducer(
  initialState,

	//2. had to make action 'contents' here, action does not work.
	// contents was the identifier of variable passed to readContentSuccess
  //3. also, had to make this an object for entityAdapter to know what to do with it (even though it already was made an object)
	on(actions.readFeedbackSuccess, (state, {feedback}) => {
		return feedbackAdapter.addMany(feedback, state)
		
	}),

  on(actions.createFeedback, (state, action) => {
		return feedbackAdapter.addOne(action, state);
  }),

  on(actions.deleteFeedback, (state, action) => {
    return feedbackAdapter.removeOne(action.id, state);
  }),

	//4. updateOne method expects {id, changes : <change object emitted by firestore doc reference when updated>} 
  on(actions.updateFeedback, (state, action) => { 
		return feedbackAdapter.updateOne({id : action.id, changes : action.data}, state);

  })
	
);


// create the default selectors
export const getFeedbackState = createFeatureSelector<State>('feedback');

export const {
	selectIds,
	selectEntities,
	selectAll,
	selectTotal,
} = feedbackAdapter.getSelectors(getFeedbackState);