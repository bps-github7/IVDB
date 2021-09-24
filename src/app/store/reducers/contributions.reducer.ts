import { createContribution, deleteContribution, readContributions, updateContribution, readContributionsSuccess } from './../actions/contributions.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector, createReducer, on } from '@ngrx/store';
import { Contribution } from 'src/app/models/user/contribution.model';



export const contributionsAdapter = createEntityAdapter<Contribution>();
export interface State extends EntityState<Contribution> { }


export const initialState: State = contributionsAdapter.getInitialState();

export const ContributionsReducer = createReducer(
  initialState,

	on(readContributionsSuccess, (state, {contributions}) => {
		contributionsAdapter.addMany(contributions, state)
	}),

  on(createContribution, (state, action) => {
		return contributionsAdapter.addOne(action, state);
  }),

  on(deleteContribution, (state, action) => {
    return contributionsAdapter.removeOne(action.id, state);
  }),

  on(updateContribution, (state, action) => { 
		return contributionsAdapter.updateOne({id : action.id, changes : action.data}, state);
  })
);

export const getContribution = createFeatureSelector<State>('contributions');

export const {
	selectIds,
	selectEntities,
	selectAll,
	selectTotal,
} = contributionsAdapter.getSelectors(getContribution);