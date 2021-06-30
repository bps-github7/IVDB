import { createFeatureSelector, createSelector } from '@ngrx/store';
import {GameInfo} from 'src/app/models/game-info.model'
import { getGameInfoState } from '../reducers/game-info.reducer';

export interface GameInfoState {
	gameInfo : ReadonlyArray<GameInfo>;
}

/* 
TODO: two points:
1) look into where to store entity related code in a large ngrx project
2) 

*/

// prety sure this is equivalent to above game Info feature selector
export const gameInfoSelector = createSelector(
	(state: GameInfoState) => state.gameInfo,
	(gameInfo : ReadonlyArray<GameInfo>) => gameInfo
)

//please note: family is our word for "type". including type in the inteface
// unfortunately causes problems when that interface is passed in as action props
export const getFamily = (family : string) => 
	createSelector(gameInfoSelector, (gameInfo) => {
		return gameInfo.filter((gameInfo : GameInfo) => gameInfo.family === family) 
	})