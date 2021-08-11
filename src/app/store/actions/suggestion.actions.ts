import { createAction, props } from "@ngrx/store";
import { Suggestion } from "src/app/models/contrib/suggestion.model";

// get every document in the collection
export const readSuggestions = createAction(
	'[Suggestion] readSuggestions',
);

export const readSuggestionsSuccess = createAction(
	'[Suggestion] readSuggestionsSuccess',
	props<{suggestions : Suggestion[]}>()
);


export const createSuggestion = createAction(
	'[Suggestions] createSuggestions',
	props<Suggestion>()
	);

export const createSuggestionSuccess = createAction(
	'[Suggestion] createSuggestionSuccess',
);

export const updateSuggestion = createAction(
	'[Suggestion] updateSuggestion',
	props<{id : string, data : Partial<Suggestion>}>()
);

// indicates when updating the document was successful
export const updateSuggestionSuccess = createAction(
	'[Suggestion] updateSuggestionSuccess',
);

export const deleteSuggestion = createAction(
	'[Suggestion] deleteSuggestion',
	props<{id : string}>()
);

export const deleteSuggestionSuccess = createAction(
	'[Suggestion] deleteSuggestionSuccess',
);