import { createAction, props } from "@ngrx/store";
import { VideogameConsole } from "src/app/models/content/videogame-console.model";

// get every document in the collection
export const readVideogameConsole = createAction(
	'[VideogameConsole] readVideogameConsole',
);

export const readVideogameConsoleSuccess = createAction(
	'[VideogameConsole] readVideogameConsoleSuccess',
	props<{videogameConsoles : VideogameConsole[]}>()
);

export const createVideogameConsole = createAction(
	'[VideogameConsole] createVideogameConsole',
	props<VideogameConsole>()
);

export const createVideogameConsoleSuccess = createAction(
	'[VideogameConsole] createVideogameConsoleSuccess',
);

export const updateVideogameConsole = createAction(
	'[VideogameConsole] updateVideogameConsole',
	props<{id : string, data : Partial<VideogameConsole>}>()
);

export const updateVideogameConsoleSuccess = createAction(
	'[VideogameConsole] updateVideogameConsoleSuccess',
);

export const deleteVideogameConsole = createAction(
	'[VideogameConsole] deleteVideogameConsole',
	props<{id : string}>()
);

export const deleteVideogameConsoleSuccess = createAction(
	'[VideogameConsole] deleteVideogameConsoleSuccess',
);