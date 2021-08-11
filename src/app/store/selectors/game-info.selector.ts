import { createSelector } from '@ngrx/store';
import {GameInfo} from 'src/app/models/content/game-info.model'
import * as fromGameInfo  from '../reducers/game-info.reducer';

export const selectGameInfoFamily = (family: string) => 
	createSelector(
		fromGameInfo.selectAll, 
		(entities : GameInfo[]) => {
			return entities.filter((gameInfo : GameInfo) => gameInfo.family === family)
})

export const selectGameInfoByFamilyAndTitleSubstring = (family : string, title : string) => 
	createSelector(
		selectGameInfoFamily(family),
		(selectedFamily : GameInfo[]) => {
			return selectedFamily.filter((selectedFamily : GameInfo) =>(selectedFamily.title.toLowerCase()).includes(title.toLowerCase()))
		}
	)