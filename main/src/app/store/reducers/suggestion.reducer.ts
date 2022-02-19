import * as actions from '../actions/suggestion.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector, createReducer, on } from '@ngrx/store';
import { Suggestion } from 'src/app/models/contrib/suggestion.model';

export const suggestionAdapter = createEntityAdapter<Suggestion>();
export interface State extends EntityState<Suggestion> { }

const defaultSuggestion = {
	ids: [],
	entities : {}
}

export const initialState: State = suggestionAdapter.getInitialState(defaultSuggestion);

export const SuggestionReducer = createReducer(
  initialState,

	on(actions.readSuggestionsSuccess, (state, {suggestions}) => {
		return suggestionAdapter.addMany(suggestions, state)
	}),

  on(actions.createSuggestion, (state, action) => {
		return suggestionAdapter.addOne(action, state);
  }),

  on(actions.deleteSuggestion, (state, action) => {
    return suggestionAdapter.removeOne(action.id, state);
  }),

	//4. updateOne method expects {id, changes : <change object emitted by firestore doc reference when updated>} 
  on(actions.updateSuggestion, (state, action) => { 
		return suggestionAdapter.updateOne({id : action.id, changes : action.data}, state);

  })
	
);

// create the default selectors
export const getSuggestionState = createFeatureSelector<State>('suggestion');

export const {
	selectIds,
	selectEntities,
	selectAll,
	selectTotal,
} = suggestionAdapter.getSelectors(getSuggestionState);