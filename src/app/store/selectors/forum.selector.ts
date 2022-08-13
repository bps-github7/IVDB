import { createSelector } from "@ngrx/store";
import { Forum } from "src/app/models/content/forum.model";
import * as fromForum from 'src/app/store/reducers/forum.reducer';
import { selectParams } from "./router.selector";


// select by titleSubstring
export const selectForumByTitleSubstring = (title : string) =>
	createSelector(
		fromForum.selectAll,
		(entities : Forum []) => {
			return entities.filter((entity : Forum) => (entity.title.toLowerCase()).includes(title.toLowerCase()))
		} 
	)

export const selectForumFamily = (family: string) => 
	createSelector(
		fromForum.selectAll, 
		(entities : Forum[]) => {
			return entities.filter((entity : Forum) => entity?.family === family)
});

export const selectForumEntity = id => createSelector(
	fromForum.selectEntities,
	entities => entities[id]
);

export const selectForumByIdParam = createSelector(
	fromForum.selectAll,
	selectParams,
	(forums, { forumId }) => {	
		return forums.filter((forum : Forum) => forum.id === forumId )[0];
	}	
)

export const selectForumByTitleParam = createSelector(
	fromForum.selectAll,
	selectParams,
	(forums, { forumTitle } ) => { 
		return forums.filter((forum : Forum) => forum.title === forumTitle.replaceAll("-"," "))[0]
	}
)