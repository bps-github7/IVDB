import { Thread } from 'src/app/models/contrib/thread.model';
import { createSelector } from "@ngrx/store";
import * as fromThread from 'src/app/store/reducers/thread.reducer';


// Allows filtering of a list of forums
export const selectThreadsByForumAndTitleSubstring = (forum : string, title : string) =>
	createSelector(
		selectThreadsByForum(forum),	
		(entities : Thread []) => {
			return entities.filter((entity : Thread) => (entity.title.toLowerCase()).includes(title.toLowerCase()))
		} 
	)

export const selectThreadsByForum = (forum: string) => 
	// get all the threads of a paticular type	
	createSelector(
		fromThread.selectAll, 
		(entities : Thread[]) => {
			return entities.filter((entity : Thread) => entity?.forum === forum)
});


export const selectThreadsByCreator = (creator: string) => 
	createSelector(
		fromThread.selectAll, 
		(entities : Thread[]) => {
			return entities.filter((entity : Thread) => entity?.creator === creator)
});

export const selectThreadEntity = id => createSelector(
	fromThread.selectEntities,
	entities => entities[id]
);
