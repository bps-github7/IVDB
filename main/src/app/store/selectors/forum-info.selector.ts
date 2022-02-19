import { createSelector } from "@ngrx/store";
import { ForumInfo } from "src/app/models/content/forum-info.model";
import * as fromForumInfo from 'src/app/store/reducers/forum-info.reducer';


// select by titleSubstring
export const selectForumInfoByFamilyAndTitleSubstring = (family : string, title : string) => 
	createSelector(
		selectForumInfoFamily(family),
		(selectedFamily : ForumInfo[]) => {
			return selectedFamily.filter((selectedFamily : ForumInfo) =>(selectedFamily.title.toLowerCase()).includes(title.toLowerCase()))
		}
	)

export const selectForumInfoFamily = (family: string) => 
	createSelector(
		fromForumInfo.selectAll, 
		(entities : ForumInfo[]) => {
			return entities.filter((entity : ForumInfo) => entity?.family === family)
});

export const selectForumInfoEntity = id => createSelector(
	fromForumInfo.selectEntities,
	entities => entities[id]
);