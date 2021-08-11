import { createSelector } from "@ngrx/store";
import { Game } from "src/app/models/content/game.model";
import * as fromGame from 'src/app/store/reducers/game.reducer';
import { selectParams } from "./router.selector";


// select by titleSubstring
export const selectGameByTitleSubstring = (title : string) =>
	createSelector(
		fromGame.selectAll,
		(entities : Game []) => {
			return entities.filter((entity : Game) => (entity.title.toLowerCase()).includes(title.toLowerCase()))
		} 
	)

export const selectGameEntity = id => createSelector(
	fromGame.selectEntities,
	entities => entities[id]
);

export const selectGameByIdParam = createSelector(
	fromGame.selectAll,
	selectParams,
	(games, { gameId } ) => { 
		return games.filter((game : Game) => game.id === gameId)[0]
	}
)

export const selectGameByTitleParam = createSelector(
	fromGame.selectAll,
	selectParams,
	(games, { gameTitle } ) => { 
		return games.filter((game : Game) => game.title === gameTitle.replaceAll("+"," "))[0]
	}
)