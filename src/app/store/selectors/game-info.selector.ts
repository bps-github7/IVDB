import { createFeatureSelector, createSelector } from '@ngrx/store';
import {GameInfo} from 'src/app/models/game-info.model'
import * as fromGameInfo  from '../reducers/game-info.reducer';

//an alternative approach, using entity
// export const getFamily = (family : string ) =>
// 	createSelector(
// 		getGameInfoState, 
// 		(gameInfo, family) => gameInfo.map(c => ({
// 			...c,
// 			owner: family
// 		}))
// 	)

export const selectGameInfoEntities = createSelector(
	fromGameInfo.getGameInfoState,
	fromGameInfo.selectGameInfoEntities
)

export const getFamily = (family: string) => 
	// how do we get the entities from the state 
	createSelector(
		selectGameInfoEntities, 
		(entities: GameInfo[]) => {
			entities.filter((item: GameInfo) => item.family === family)}
	);


// export const getFamily = (family: string) =>
//   createSelector(gameInfoSelector, (gameInfo) => gameInfo.filter(g => (g.family === family)))


// prety sure this is equivalent to above game Info feature selector
// export const gameInfoSelector = createSelector(
// 	(state: fromGame.GameInfoState) => state.gameInfo,
// 	(gameInfo : ReadonlyArray<GameInfo>) => gameInfo
// )

//please note: family is our word for "type". including type in the inteface
// unfortunately causes problems when that interface is passed in as action props
// export const getFamily = (family : string) => 
// 	createSelector(gameInfoSelector, (gameInfo) => {
// 		return gameInfo.filter((gameInfo : GameInfo) => gameInfo.family === family) 
// 	})