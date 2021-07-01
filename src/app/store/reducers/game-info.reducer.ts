import * as actions from '../actions/game-info.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector, createReducer, on } from '@ngrx/store';
import { GameInfo } from 'src/app/models/game-info.model';


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

// select the array of GameInfo ids
export const selectGameInfoIds = selectIds;
 
// select the dictionary of GameInfo entities
export const selectGameInfoEntities = selectEntities;
 
// select the array of GameInfo
export const selectAllGameInfos = selectAll;
 
// select the total GameInfo count
export const selectGameInfoTotal = selectTotal;


// an alternative reducer which doesnt use entityAdapter to track gameInfo data in state
// export interface GameInfoState {
// 	gameInfo : ReadonlyArray<GameInfo>;
// }

// const initialState : ReadonlyArray<GameInfo> = [];

// export const GameInfoReducer = createReducer(
// 	initialState,
// 	on(actions.readGameInfoSuccess, (state, {gameInfo}) => [...gameInfo]),
// 	on(actions.createGameInfo, (state, action) =>  [...state, action])
// )