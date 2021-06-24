import { Action } from "@ngrx/store";
import { Content } from '../reducers/content.reducer';

/* 
in order to handle the exporting of each action, reducer and effect file through
hieracrchical index.ts files, we will need to majorly refactor each action, reducer + effect chain
essentially, giving the actions better / more specific names, which will ripple through the exisiting
ngrx code base. try to be tactical/ strategic about naming, adhere to casing conventions, best practices

mainly we want to go for more specific and conventional names, ie:
ADDED => ADDCONTENT, CREATEDCONTENT
MODIFIED => UPDATECONTENT
REMOVED => DELETECONTENT 

the goal is 1) better memorability / comprehensability. and 2) having a central place of export/ import
so we dont have to import Gameinfo, Game, Content etc in each admin module component that requires them,
we were trying to do this by having hieratchical index.ts files which export each file members (sort of like __init__.py)
but there was naming conflicts, because content and contrib both contain ADDED, REMOVED, UPDATED etc

before shooting yourself in the foot.PLEASE do the research
to fully understand what these things do in the big picture,
what possible consequences could result from renaming them (ie ... do they have to follow a convention to work right?)

I saw someone using a enum to define all of these. so we dont have to repeat export const a bunch, among other things
*/





export const QUERY 			= '[Content] query content';

export const ADDED			= '[Content] added';
export const MODIFIED		= '[Content] modified';
export const REMOVED		= '[Content] removed';

export const UPDATE     = '[Content] update';
export const SUCCESS		= '[Content] update success';

export class Query implements Action {
	readonly type = QUERY;
	constructor() { }
}

export class Added implements Action {
	readonly type = ADDED;
	constructor(public payload: Content) { }
}


export class Modified implements Action {
	readonly type = MODIFIED;
	constructor(public payload: Content) { }
}

export class Removed implements Action {
	readonly type = REMOVED;
	constructor(public payload: Content) { }
}

export class Update implements Action {
	readonly type = UPDATE;
	constructor(
		// need to get this from the database!
		public id: string,
		public changes: Partial<Content>
	) { }
}

export class Success implements Action {
	readonly type = SUCCESS;
	constructor() { }
}

export type ContentActions = 
	Query |
	Added |
	Modified |
	Removed |
	Update |
	Success;