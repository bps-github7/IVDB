import { createSelector } from "@ngrx/store";
import { Suggestion } from "src/app/models/contrib/suggestion.model";
import * as fromSuggestion from 'src/app/store/reducers/suggestion.reducer';
import { AppState } from "../reducers";
import { selectParams, selectQueryParams } from "./router.selector";


// select by titleSubstring
export const selectSuggestionByTitleSubstring = (title : string) =>
	createSelector(
		fromSuggestion.selectAll,
		(entities : Suggestion []) => {
			return entities.filter((entity : Suggestion) => (entity.title.toLowerCase()).includes(title.toLowerCase()))
		} 
	)

export const selectSuggestionFamily = (family: string) => 
	createSelector(
		fromSuggestion.selectAll, 
		(entities : Suggestion[]) => {
			return entities.filter((entity : Suggestion) => entity?.family === family)
});

export const selectSuggestionEntity = id => createSelector(
	fromSuggestion.selectEntities,
	entities => entities[id]
);

export const selectSuggestionByIdParam = createSelector(
	fromSuggestion.selectAll,
	selectParams,
	(suggestions, { suggestionId }) => {	
		return suggestions.filter((suggestion : Suggestion) => suggestion.id === suggestionId )[0];
	}	
)

export const selectSuggestionByTitleParam = createSelector(
	fromSuggestion.selectAll,
	selectParams,
	(suggestions, { suggestionTitle } ) => { 
		return suggestions.filter((suggestion : Suggestion) => suggestion.title === suggestionTitle.replaceAll("+"," "))[0]
	}
)