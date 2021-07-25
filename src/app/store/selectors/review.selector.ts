import { createSelector } from "@ngrx/store";
import { Game } from "src/app/models/content/game.model";
import * as fromGame from 'src/app/store/reducers/game.reducer';
import { AppState } from "../reducers";
import { selectParams, selectQueryParams } from "./router.selector";


// select by titleSubstring
export const selectReviewByTitleSubstring = (title : string) =>
	createSelector(
		fromGame.selectAll,
		(entities : Game []) => {
			return entities.filter((entity : Game) => (entity.title.toLowerCase()).includes(title.toLowerCase()))
		} 
	)

export const selectReviewEntity = id => createSelector(
	fromGame.selectEntities,
	entities => entities[id]
);

const routeParams = createSelector(
	(state : AppState) => state.router.state,
	(state) => state.params
)



export const getGameByIdParam = createSelector(
	fromGame.selectAll,
	selectParams,
	(games, { gameId } ) => { 
		return games.filter((game : Game) => game.id === gameId)[0]
	}
)

export const getGameByTitleParam = createSelector(
	fromGame.selectAll,
	selectParams,
	(games, { gameTitle } ) => { 
		return games.filter((game : Game) => game.title === gameTitle.replaceAll("+"," "))[0]
	}
)
