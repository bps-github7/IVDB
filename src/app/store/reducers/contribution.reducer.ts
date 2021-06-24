import * as actions from '../actions/contribution.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';
export interface Contribution {
	id: string,

	// category - rating, review, comment, thread, forum, group, preference, profile
	category: string;

	// an object containing the details of this contribution- will vary by category. 
	body: any;
}


export const contributionAdapter = createEntityAdapter<Contribution>();
export interface State extends EntityState<Contribution> { }

// TODO: Do we really NEED a default state
const defaultContribution = {
	ids: [],
	entities : {}
}

export const initialState: State = contributionAdapter.getInitialState(defaultContribution);

export function ContributionReducer(
	state : State = initialState,
	action : actions.ContributionActions
	) {
		console.log(action.type, state);

		switch(action.type) {
			case actions.ADDED:
				return contributionAdapter.addOne(action.payload, state);
		
			case actions.MODIFIED:
				return contributionAdapter.updateOne({
					id : action.payload.id,
					changes: action.payload
				}, state);
		
			case actions.REMOVED:
				return contributionAdapter.removeOne(action.payload.id, state);
		
			default:
				return state;
		}
}

// create the default selectors
export const getContributionState = createFeatureSelector<State>('contributions');

export const {
	selectIds,
	selectEntities,
	selectAll,
	selectTotal,
} = contributionAdapter.getSelectors(getContributionState);