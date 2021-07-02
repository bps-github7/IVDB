import { createSelector } from "@ngrx/store";
import { Game } from "src/app/models/content/Game";
import * as fromGame from 'src/app/store/reducers/game.reducer';


// select by titleSubstring
export const selectByTitleSubstring = (title : string) =>
	createSelector(
		fromGame.selectAll,
		(entites : Game []) => //find a match where title contains substring 
	)



// select by category

// select by creator

// select by platform

// select by console(s)

// select by title

// select by ...