import { createAction, props, Action } from "@ngrx/store";
import { Game } from '../reducers/game.reducer';

// get every document in the collection
export const readGames = createAction(
	'[Game] readGames',
);

export const readGamesSuccess = createAction(
	'[Game] readGamesSuccess',
	props<{games : Game[]}>()
);


export const createGame = createAction(
	'[Games] createGames',
	props<Game>()
	);

export const createGameSuccess = createAction(
	'[Game] createGameSuccess',
);

export const updateGame = createAction(
	'[Game] updateGame',
	props<{id : string, data : Partial<Game>}>()
);

// indicates when updating the document was successful
export const updateGameSuccess = createAction(
	'[Game] updateGameSuccess',
);

export const deleteGame = createAction(
	'[Game] deleteGame',
	props<{id : string}>()
);

export const deleteGameSuccess = createAction(
	'[Game] deleteGameSuccess',
);

export const contentActionTypes = {
	readGames,
	readGamesSuccess,
	createGame,
	createGameSuccess,
	deleteGame,
	deleteGameSuccess,
	updateGame,
	updateGameSuccess
}