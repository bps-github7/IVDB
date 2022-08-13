import { createPreferences, deletePreferences, readPreferences, updatePreferences, readPreferencesSuccess } from './../actions/preferences.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector, createReducer, on } from '@ngrx/store';
import { Preferences } from 'src/app/models/user/preferences.model';



export const preferencesAdapter = createEntityAdapter<Preferences>();
export interface State extends EntityState<Preferences> { }


export const initialState: State = preferencesAdapter.getInitialState();

export const PreferencesReducer = createReducer(
  initialState,

	on(readPreferencesSuccess, (state, {preferences}) => {
		return preferencesAdapter.addMany(preferences, state)
	}),

  on(createPreferences, (state, action) => {
		return preferencesAdapter.addOne(action, state);
  }),

  on(deletePreferences, (state, action) => {
    return preferencesAdapter.removeOne(action.id, state);
  }),

  on(updatePreferences, (state, action) => { 
		return preferencesAdapter.updateOne({id : action.id, changes : action.data}, state);
  })
);

export const getPreferences = createFeatureSelector<State>('preferences');

export const {
	selectIds,
	selectEntities,
	selectAll,
	selectTotal,
} = preferencesAdapter.getSelectors(getPreferences);