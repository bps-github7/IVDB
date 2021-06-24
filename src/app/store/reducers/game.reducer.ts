import * as actions from '../actions/game.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';

// need to export game model from here, for this example. hopefully we can find a workaround
export interface Game {
	id: string,
	title : string,
	price: number,
	description ?: string,
	gameInfo? : {
		creators: string[],
		categories: string [],
		// consoleOwners: ? string []
		consoles: string[]
	}
}


export const gameAdapter = createEntityAdapter<Game>();
export interface State extends EntityState<Game> { }

const defaultGame = {
	ids: [],
	entities : {}
}

export const initialState: State = gameAdapter.getInitialState(defaultGame);

export function GameReducer(
	state : State = initialState,
	action : actions.GameActions
	) {
		console.log(action.type, state);

		switch(action.type) {
			case actions.ADDED:
				return gameAdapter.addOne(action.payload, state);
		
			case actions.MODIFIED:
				return gameAdapter.updateOne({
					id : action.payload.id,
					changes: action.payload
				}, state);
		
			case actions.REMOVED:
				return gameAdapter.removeOne(action.payload.id, state);
		
			default:
				return state;
		}
}

// create the default selectors
export const getContentState = createFeatureSelector<State>('games');

export const {
	selectIds,
	selectEntities,
	selectAll,
	selectTotal,
} = gameAdapter.getSelectors(getContentState);