import * as actions from '../actions/game-info.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector, createReducer, on } from '@ngrx/store';
export interface GameInfo{
	id: string,
	family: string,
	title: string,
	description: string
}

export const gameInfoAdapter = createEntityAdapter<GameInfo>();

export interface State extends EntityState<GameInfo> { }

const defaultGameInfo = {
	ids: [],
	entities : {}
}

export const initialState: State = gameInfoAdapter.getInitialState(defaultGameInfo);

export const GameInfoReducer = createReducer(
  initialState,
	on(actions.readGameInfoSuccess, (state, {gameInfo}) => {return gameInfoAdapter.addMany(gameInfo, state)}),
  on(actions.createGameInfo, (state, action) => {return gameInfoAdapter.addOne(action, state)}),
  on(actions.deleteGameInfo, (state, action) => {return gameInfoAdapter.removeOne(action.id, state)}),
  on(actions.updateGameInfo, (state, action) => {return gameInfoAdapter.updateOne({id : action.id, changes : action.data}, state)})
);

export const getGameInfoState = createFeatureSelector<State>('gameInfo');

export const {
	selectIds,
	selectEntities,
	selectAll,
	selectTotal,
} = gameInfoAdapter.getSelectors(getGameInfoState);