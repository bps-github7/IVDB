import { Action } from "@ngrx/store";
import { Contribution } from '../reducers/contribution.reducer';

export const QUERY 			= '[Contribution] query contribution';
export const ADDED			= '[Contribution] added';
export const MODIFIED		= '[Contribution] modified';
export const REMOVED		= '[Contribution] removed';
export const UPDATE     = '[Contribution] update';
export const SUCCESS		= '[Contribution] update success';

export class Query implements Action {
	readonly type = QUERY;
	constructor() { }
}

export class Added implements Action {
	readonly type = ADDED;
	constructor(public payload: Contribution) { }
}


export class Modified implements Action {
	readonly type = MODIFIED;
	constructor(public payload: Contribution) { }
}

export class Removed implements Action {
	readonly type = REMOVED;
	constructor(public payload: Contribution) { }
}

export class Update implements Action {
	readonly type = UPDATE;
	constructor(
		// need to get this from the database!
		public id: string,
		public changes: Partial<Contribution>
	) { }
}

export class Success implements Action {
	readonly type = SUCCESS;
	constructor() { }
}

export type ContributionActions = 
	Query |
	Added |
	Modified |
	Removed |
	Update |
	Success;