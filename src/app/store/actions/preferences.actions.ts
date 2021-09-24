import { createAction, props } from "@ngrx/store";
import { Preferences } from "src/app/models/user/preferences.model";

// get every document in the collection
export const readPreferences = createAction(
	'[Preferences] readPreferences',
);

export const readPreferencesSuccess = createAction(
	'[Preferences] readPreferencesSuccess',
	props<{Preferences : Preferences[]}>()
);

export const createPreferences = createAction(
	'[Preferences] createPreferences',
	props<Preferences>()
);

export const createPreferencesSuccess = createAction(
	'[Preferences] createPreferencesSuccess',
);

export const updatePreferences = createAction(
	'[Preferences] updatePreferences',
	props<{id : string, data : Partial<Preferences>}>()
);

export const updatePreferencesSuccess = createAction(
	'[Preferences] updatePreferencesSuccess',
);

export const deletePreferences = createAction(
	'[Preferences] deletePreferences',
	props<{id : string}>()
);

export const deletePreferencesSuccess = createAction(
	'[Preferences] deletePreferencesSuccess',
);