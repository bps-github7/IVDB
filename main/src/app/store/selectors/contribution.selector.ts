import { createSelector } from '@ngrx/store';
import { Contribution } from 'src/app/models/contrib/contribution.model'
import * as fromContrib  from '../reducers/contributions.reducer';

export const selectContentFamily = (family: string) => 
	createSelector(
		fromContrib.selectAll, 
		(entities : Contribution[]) => {
			return entities.filter((contrib : Contribution) => contrib?.family === family);
});

export const selectAllUserContribsByDisplayName = (displayName : string) =>
	createSelector(
		fromContrib.selectAll,
		(entities : Contribution[]) => {
			return entities.filter((contrib : Contribution) => contrib.displayName === displayName);
		}
	);