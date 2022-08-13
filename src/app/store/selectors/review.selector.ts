import { createSelector } from "@ngrx/store";
import { Review } from "src/app/models/contrib/review.model";
import * as fromReview from 'src/app/store/reducers/Review.reducer';
import { AppState } from "../reducers";
import { selectParams, selectQueryParams } from "./router.selector";


// select by titleSubstring
export const selectReviewByTitleSubstring = (title : string) =>
	createSelector(
		fromReview.selectAll,
		(entities : Review []) => {
			return entities.filter((entity : Review) => (entity.title.toLowerCase()).includes(title.toLowerCase()))
		} 
	)

export const selectReviewEntity = id => createSelector(
	fromReview.selectEntities,
	entities => entities[id]
);

const routeParams = createSelector(
	(state : AppState) => state.router.state,
	(state) => state.params
)



export const getGameByIdParam = createSelector(
	fromReview.selectAll,
	selectParams,
	(games, { gameId } ) => { 
		return games.filter((game : Review) => game.id === gameId)[0]
	}
)

export const getGameByTitleParam = createSelector(
	fromReview.selectAll,
	selectParams,
	(games, { gameTitle } ) => { 
		return games.filter((game : Review) => game.title === gameTitle.replaceAll("+"," "))[0]
	}
)
