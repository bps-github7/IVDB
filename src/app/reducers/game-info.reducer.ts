import * as actions from '../actions/game-info.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';
export interface GameInfo{
	id: string,
	type: string,
	title: string,
	description: string
}

export const gameInfoAdapter = createEntityAdapter<GameInfo>();
export interface State extends EntityState<GameInfo> { }

export const initialState: State = gameInfoAdapter.getInitialState();

export function GameInfoReducer(
	state : State = initialState,
	action : actions.GameInfoActions
	) {
		console.log(action.type, state);

		switch(action.type) {
			case actions.ADDED:
				return gameInfoAdapter.addOne(action.payload, state);
		
			case actions.MODIFIED:
				return gameInfoAdapter.updateOne({
					id : action.payload.id,
					changes: action.payload
				}, state);
		
			case actions.REMOVED:
				return gameInfoAdapter.removeOne(action.payload.id, state);
		
			default:
				return state;
		}
}

// create the default selectors
export const getGameInfoState = createFeatureSelector<State>('gameInfo');

export const {
	selectIds,
	selectEntities,
	selectAll,
	selectTotal,
} = gameInfoAdapter.getSelectors(getGameInfoState)