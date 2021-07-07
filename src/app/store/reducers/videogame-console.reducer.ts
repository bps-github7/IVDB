import * as actions from '../actions/videogame-console.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector, createReducer, on } from '@ngrx/store';
import { VideogameConsole } from 'src/app/models/content/videogame-console.model';

// need to export game model from here, for this example. hopefully we can find a workaround


export const videogameConsoleAdapter = createEntityAdapter<VideogameConsole>();
export interface State extends EntityState<VideogameConsole> { }

const defaultVideogameConsole = {
	ids: [],
	entities : {}
}

export const initialState: State = videogameConsoleAdapter.getInitialState(defaultVideogameConsole);

export const VideogameConsoleReducer = createReducer(
  initialState,

	on(actions.readVideogameConsoleSuccess, (state, {videogameConsoles}) => {
		return videogameConsoleAdapter.addMany(videogameConsoles, state)
		
	}),

  on(actions.createVideogameConsole, (state, action) => {
		return videogameConsoleAdapter.addOne(action, state);
  }),

  on(actions.deleteVideogameConsole, (state, action) => {
    return videogameConsoleAdapter.removeOne(action.id, state);
  }),

	//4. updateOne method expects {id, changes : <change object emitted by firestore doc reference when updated>} 
  on(actions.updateVideogameConsole, (state, action) => { 
		return videogameConsoleAdapter.updateOne({id : action.id, changes : action.data}, state);

  })
	
);


// create the default selectors
export const getVideogameConsoleState = createFeatureSelector<State>('videogameConsoles');

export const {
	selectIds,
	selectEntities,
	selectAll,
	selectTotal,
} = videogameConsoleAdapter.getSelectors(getVideogameConsoleState)