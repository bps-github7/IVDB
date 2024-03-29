import { createAction, props } from "@ngrx/store";
import { GameInfo } from 'src/app/models/content/game-info.model';

// get every document in the collection
export const readGameInfo = createAction(
	'[GameInfo] readGameInfo',
);

export const readGameInfoSuccess = createAction(
	'[GameInfo] readGameInfoSuccess',
	props<{gameInfo : GameInfo[]}>()
);

export const createGameInfo = createAction(
	'[GameInfo] createGameInfo',
	props<GameInfo>()
);

export const createGameInfoSuccess = createAction(
	'[GameInfo] createGameInfoSuccess',
);

export const updateGameInfo = createAction(
	'[GameInfo] updateGameInfo',
	props<{id : string, data : Partial<GameInfo>}>()
);

export const updateGameInfoSuccess = createAction(
	'[GameInfo] updateGameInfoSuccess',
);

export const deleteGameInfo = createAction(
	'[GameInfo] deleteGameInfo',
	props<{id : string}>()
);

export const deleteGameInfoSuccess = createAction(
	'[GameInfo] deleteGameInfoSuccess',
);