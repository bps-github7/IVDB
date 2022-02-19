import * as actions from '../actions/videogame-console.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector, createReducer, on } from '@ngrx/store';
import { VideogameConsole } from 'src/app/models/content/videogame-console.model';

// set up entity- adapter, EntityState and default entities, initial state
export const videogameConsoleAdapter = createEntityAdapter<VideogameConsole>();
export interface State extends EntityState<VideogameConsole> { }

const defaultVideogameConsole = {
	ids: [],
	entities : {}
}

export const initialState: State = videogameConsoleAdapter.getInitialState(defaultVideogameConsole);

export const VideogameConsoleReducer = createReducer(
  initialState,
	on(actions.readVideogameConsoleSuccess, (state, {videogameConsoles}) => { return videogameConsoleAdapter.addMany(videogameConsoles, state) } ),
  on(actions.createVideogameConsole, (state, action) => { return videogameConsoleAdapter.addOne(action, state) }),
  on(actions.deleteVideogameConsole, (state, action) => { return videogameConsoleAdapter.removeOne(action.id, state) }),
  on(actions.updateVideogameConsole, (state, action) => {	return videogameConsoleAdapter.updateOne({id : action.id, changes : action.data}, state) })
);


// create the feature selectors and entity default selectors
export const getVideogameConsoleState = createFeatureSelector<State>('videogameConsole');

export const {
	selectIds,
	selectEntities,
	selectAll,
	selectTotal,
} = videogameConsoleAdapter.getSelectors(getVideogameConsoleState)