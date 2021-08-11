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