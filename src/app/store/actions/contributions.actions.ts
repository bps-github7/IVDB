import { createAction, props } from "@ngrx/store";
import { Contribution } from "src/app/models/contrib/contribution.model";

// get every document in the collection
export const readContributions = createAction(
	'[Contributions] readContributions',
);

export const readContributionsSuccess = createAction(
	'[Contributions] readContributions',
	props<{contributions : Contribution[]}>()
);

export const createContribution = createAction(
	'[Contributions] createContributions',
	props<Contribution>()
);

export const createContributionSuccess = createAction(
	'[Contributions] createContribution',
);

export const updateContribution = createAction(
	'[Contributions] updateContributions',
	props<{id : string, data : Partial<Contribution>}>()
);

export const updateContributionSuccess = createAction(
	'[Contributions] updateContributions',
);

export const deleteContribution = createAction(
	'[Contributions] deleteContributions',
	props<{id : string}>()
);

export const deleteContributionSuccess = createAction(
	'[Contributions] deleteContributions',
);