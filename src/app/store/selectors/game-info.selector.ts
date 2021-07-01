import { createFeatureSelector, createSelector } from '@ngrx/store';
import {GameInfo} from 'src/app/models/game-info.model'
import * as fromGameInfo  from '../reducers/game-info.reducer';

export const selectAllGameInfos = createSelector(
	fromGameInfo.getGameInfoState,
	fromGameInfo.selectAllGameInfos
)

// export const getFamily = (family: string) => 
// 	createSelector(
// 		selectAllGameInfos, 
// 		(entities: GameInfo[]) => {
// 			entities.filter((item: GameInfo) => item.family === family)}
// 	);
export const getFamily = (family: string) => createSelector(
	selectAllGameInfos, (entities : GameInfo[]) => entities.filter((gameInfo : GameInfo) => gameInfo.family === family)
);