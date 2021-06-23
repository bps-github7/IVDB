import { ForumInfo } from '../reducers/forum-info.reducer';
import { Action } from "@ngrx/store";

export const QUERY 			= '[ForumInfo] query forum-info';

export const ADDED			= '[ForumInfo] added';
export const MODIFIED		= '[ForumInfo] modified';
export const REMOVED		= '[ForumInfo] removed';

export const UPDATE     = '[ForumInfo] update';
export const SUCCESS		= '[ForumInfo] update success';

export class Query implements Action {
	readonly type = QUERY;
	constructor() { }
}

export class Added implements Action {
	readonly type = ADDED;
	constructor(public payload: ForumInfo) { }
}


export class Modified implements Action {
	readonly type = MODIFIED;
	constructor(public payload: ForumInfo) { }
}

export class Removed implements Action {
	readonly type = REMOVED;
	constructor(public payload: ForumInfo) { }
}

export class Update implements Action {
	readonly type = UPDATE;
	constructor(
		// need to get this from the database!
		public id: string,
		public changes: Partial<ForumInfo>
	) { }
}

export class Success implements Action {
	readonly type = SUCCESS;
	constructor() { }
}

export type ForumInfoActions = 
	Query |
	Added |
	Modified |
	Removed |
	Update |
	Success;