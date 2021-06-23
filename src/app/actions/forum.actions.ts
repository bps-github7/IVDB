import { Forum } from '../reducers/forum.reducer';
import { Action } from "@ngrx/store";

export const QUERY 			= '[Forum] query forum';

export const ADDED			= '[Forum] added';
export const MODIFIED		= '[Forum] modified';
export const REMOVED		= '[Forum] removed';

export const UPDATE     = '[Forum] update';
export const SUCCESS		= '[Forum] update success';

export class Query implements Action {
	readonly type = QUERY;
	constructor() { }
}

export class Added implements Action {
	readonly type = ADDED;
	constructor(public payload: Forum) { }
}


export class Modified implements Action {
	readonly type = MODIFIED;
	constructor(public payload: Forum) { }
}

export class Removed implements Action {
	readonly type = REMOVED;
	constructor(public payload: Forum) { }
}

export class Update implements Action {
	readonly type = UPDATE;
	constructor(
		// need to get this from the database!
		public id: string,
		public changes: Partial<Forum>
	) { }
}

export class Success implements Action {
	readonly type = SUCCESS;
	constructor() { }
}

export type ForumActions = 
	Query |
	Added |
	Modified |
	Removed |
	Update |
	Success;