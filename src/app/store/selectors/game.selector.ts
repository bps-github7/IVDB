import { createSelector } from "@ngrx/store";
import { Game } from "src/app/models/content/Game";
import * as fromGame from 'src/app/store/reducers/game.reducer';


// select by titleSubstring
export const selectByTitleSubstring = (title : string) =>
	createSelector(
		fromGame.selectAll,
		(entities : Game []) => {
			return entities.filter((entity : Game) => (entity.title.toLowerCase()).includes(title.toLowerCase()))
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