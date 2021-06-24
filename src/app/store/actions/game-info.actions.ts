import { GameInfo } from '../reducers/game-info.reducer';
import { Action } from "@ngrx/store";

export const QUERY 			= '[GameInfo] query gameInfo';

export const ADDED			= '[GameInfo] added';
export const MODIFIED		= '[GameInfo] modified';
export const REMOVED		= '[GameInfo] removed';

export const UPDATE     = '[GameInfo] update';
export const SUCCESS		= '[GameInfo] update success';

export class Query implements Action {
	readonly type = QUERY;
	constructor() { }
}

export class Added implements Action {
	readonly type = ADDED;
	constructor(public payload: GameInfo) { }
}


export class Modified implements Action {
	readonly type = MODIFIED;
	constructor(public payload: GameInfo) { }
}

export class Removed implements Action {
	readonly type = REMOVED;
	constructor(public payload: GameInfo) { }
}

export class Update implements Action {
	readonly type = UPDATE;
	constructor(
		// need to get this from the database!
		public id: string,
		public changes: Partial<GameInfo>
	) { }
}

export class Success implements Action {
	readonly type = SUCCESS;
	constructor() { }
}

export type GameInfoActions = 
	Query |
	Added |
	Modified |
	Removed |
	Update |
	Success;