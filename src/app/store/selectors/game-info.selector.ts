import { createFeatureSelector, createSelector } from '@ngrx/store';
import {GameInfo} from 'src/app/models/game-info.model'
import * as fromGameInfo  from '../reducers/game-info.reducer';

export const getFamily = (family: string) => 
	createSelector(
		fromGameInfo.selectAllGameInfos, 
		(entities : GameInfo[]) => {
			return entities.filter((gameInfo : GameInfo) => gameInfo.family === family)
});