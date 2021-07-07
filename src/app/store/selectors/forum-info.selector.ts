import { createSelector } from "@ngrx/store";
import { ForumInfo } from "src/app/models/content/forum-info.model";
import * as fromForumInfo from 'src/app/store/reducers/forum-info.reducer';


// select by titleSubstring
export const selectByTitleSubstring = (title : string) =>
	createSelector(
		fromForumInfo.selectAll,
		(entities : ForumInfo []) => {
			return entities.filter((entity : ForumInfo) => (entity.title.toLowerCase()).includes(title.toLowerCase()))
		} 
	)

export const getFamily = (family: string) => 
	createSelector(
		fromForumInfo.selectAll, 
		(entities : ForumInfo[]) => {
			return entities.filter((entity : ForumInfo) => entity?.family === family)
});

export const selectEntity = id => createSelector(
	fromForumInfo.selectEntities,
	entities => entities[id]
);
