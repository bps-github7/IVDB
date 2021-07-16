import { createSelector } from "@ngrx/store";
import { Forum } from "src/app/models/content/forum.model";
import * as fromForum from 'src/app/store/reducers/forum.reducer';
import { AppState } from "../reducers";
import { selectParams, selectQueryParams } from "./router.selector";


// select by titleSubstring
export const selectByTitleSubstring = (title : string) =>
	createSelector(
		fromForum.selectAll,
		(entities : Forum []) => {
			return entities.filter((entity : Forum) => (entity.title.toLowerCase()).includes(title.toLowerCase()))
		} 
	)

export const getFamily = (family: string) => 
	createSelector(
		fromForum.selectAll, 
		(entities : Forum[]) => {
			return entities.filter((entity : Forum) => entity?.family === family)
});

export const selectEntity = id => createSelector(
	fromForum.selectEntities,
	entities => entities[id]
);

export const getForumByIdParam = createSelector(
	fromForum.selectAll,
	selectParams,
	(forums, { forumId }) => {	
		return forums.filter((forum : Forum) => forum.id === forumId )[0];
	}	
)

// TODO-ish: this is probably going to require some debugging
export const getForumByTitleParam = createSelector(
	fromForum.selectAll,
	selectParams,
	(forums, { forumTitle } ) => { 
		return forums.filter((forum : Forum) => forum.title === forumTitle.replaceAll("+"," "))[0]
	}
)