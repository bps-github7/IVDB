import { createSelector } from "@ngrx/store";
import { Game } from "src/app/models/content/game.model";
import * as fromGame from 'src/app/store/reducers/game.reducer';
import { AppState } from "../reducers";


// select by titleSubstring
export const selectByTitleSubstring = (title : string) =>
	createSelector(
		fromGame.selectAll,
		(entities : Game []) => {
			return entities.filter((entity : Game) => (entity.title.toLowerCase()).includes(title.toLowerCase()))
		} 
	)

export const selectEntity = id => createSelector(
	fromGame.selectEntities,
	entities => entities[id]
);

const routerParams = createSelector(
	(state : AppState) => state.router.state,
	(state) => state.params
)

// used by paramSelector, 
export const gameSelector = createSelector(
	(state : AppState) => state.games,
	(games : ReadonlyArray<Game>) => games
);

export const getGameByParam = createSelector(
	fromGame.selectAll,
	routerParams,
	(games : ReadonlyArray<Game>, { id }) => {
		return games.filter((game : Game) => game.id === id)[0];
	}	
)

// select by category
export const selectGamesByCategory = (category: string | string []) => {
	if (typeof(category) === "string") {
		createSelector(
			fromGame.selectAll,
			(entities : Game []) => {
				return entities.filter((game : Game) => game.categories.includes(category))
			}
			)
	}
	else {
		console.log("selector which takes multiple categories must be implemented")
	}
	//need to figure out how to 
	// else if (category.constructor === "Array") {

	// }		
}


// select by creator

// select by platform

// select by console(s)

// select by title

// select by ...