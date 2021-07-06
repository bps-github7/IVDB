import * as actions from '../actions/game.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector, createReducer, on } from '@ngrx/store';
import { Game } from 'src/app/models/content/game.model';

// need to export game model from here, for this example. hopefully we can find a workaround


export const gameAdapter = createEntityAdapter<Game>();
export interface State extends EntityState<Game> { }

const defaultGame = {
	ids: [],
	entities : {}
}

export const initialState: State = gameAdapter.getInitialState(defaultGame);

export const GameReducer = createReducer(
  initialState,

	//2. had to make action 'contents' here, action does not work.
	// contents was the identifier of variable passed to readContentSuccess
  //3. also, had to make this an object for entityAdapter to know what to do with it (even though it already was made an object)
	on(actions.readGamesSuccess, (state, {games}) => {
		return gameAdapter.addMany(games, state)
		
	}),

  on(actions.createGame, (state, action) => {
		return gameAdapter.addOne(action, state);
  }),

  on(actions.deleteGame, (state, action) => {
    return gameAdapter.removeOne(action.id, state);
  }),

	//4. updateOne method expects {id, changes : <change object emitted by firestore doc reference when updated>} 
  on(actions.updateGame, (state, action) => { 
		return gameAdapter.updateOne({id : action.id, changes : action.data}, state);

  })
	
);


// create the default selectors
export const getGameState = createFeatureSelector<State>('game');

export const {
	selectIds,
	selectEntities,
	selectAll,
	selectTotal,
} = gameAdapter.getSelectors(getGameState);