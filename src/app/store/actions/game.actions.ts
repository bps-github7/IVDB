import { Game } from '../reducers/game.reducer';
import { Action } from "@ngrx/store";

export const QUERY 			= '[Game] query game';

export const ADDED			= '[Game] added';
export const MODIFIED		= '[Game] modified';
export const REMOVED		= '[Game] removed';

export const UPDATE     = '[Game] update';
export const SUCCESS		= '[Game] update success';

export class Query implements Action {
	readonly type = QUERY;
	constructor() { }
}

export class Added implements Action {
	readonly type = ADDED;
	constructor(public payload: Game) { }
}


export class Modified implements Action {
	readonly type = MODIFIED;
	constructor(public payload: Game) { }
}

export class Removed implements Action {
	readonly type = REMOVED;
	constructor(public payload: Game) { }
}

export class Update implements Action {
	readonly type = UPDATE;
	constructor(
		// need to get this from the database!
		public id: string,
		public changes: Partial<Game>
	) { }
}

export class Success implements Action {
	readonly type = SUCCESS;
	constructor() { }
}

export type GameActions = 
	Query |
	Added |
	Modified |
	Removed |
	Update |
	Success;