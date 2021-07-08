import { createSelector } from "@ngrx/store";
import { Forum } from "src/app/models/content/forum.model";
import * as fromForum from 'src/app/store/reducers/forum.reducer';
import { AppState } from "../reducers";


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

const routerParams = createSelector(
	(state : AppState) => state.router.state,
	(state) => state.params
)

export const getForumByParam = createSelector(
	fromForum.selectAll,
	routerParams,
	(forums, { id }) => {	
		return forums.filter((forum : Forum) => forum.id === id )[0];
	}	
)

