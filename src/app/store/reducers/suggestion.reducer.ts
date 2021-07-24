import * as actions from '../actions/suggestion.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector, createReducer, on } from '@ngrx/store';
import { Suggestion } from 'src/app/models/contrib/suggestion.model';
// need to export suggestion model from here, for this example. hopefully we can find a workaround



export const suggestionAdapter = createEntityAdapter<Suggestion>();
export interface State extends EntityState<Suggestion> { }

const defaultSuggestion = {
	ids: [],
	entities : {}
}

export const initialState: State = suggestionAdapter.getInitialState(defaultSuggestion);

export const SuggestionReducer = createReducer(
  initialState,

	//2. had to make action 'contents' here, action does not work.
	// contents was the identifier of variable passed to readContentSuccess
  //3. also, had to make this an object for entityAdapter to know what to do with it (even though it already was made an object)
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