import { createSelector } from '@ngrx/store';
import { Content } from 'src/app/models/content/content.model'
import * as fromContent  from '../reducers/content.reducer';

export const selectContentFamily = (family: string) => 
	createSelector(
		fromContent.selectAll, 
		(entities : Content[]) => {
			return entities.filter((content : Content) => content?.metadata?.family === family)
});