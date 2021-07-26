import { Thread } from 'src/app/models/contrib/thread.model';
import { createSelector } from "@ngrx/store";
import * as fromThread from 'src/app/store/reducers/thread.reducer';


// select by titleSubstring
// export const selectByTitleSubstring = (title : string) =>
// 	createSelector(
// 		fromVideogameThread.selectAll,
// 		(entities : VideogameThread []) => {
// 			return entities.filter((entity : VideogameThread) => (entity.e.toLowerCase()).includes(title.toLowerCase()))
// 		} 
// 	)

export const selectThreadFamily = (family: string) => 
	createSelector(
		fromThread.selectAll, 
		(entities : Thread[]) => {
			return entities.filter((entity : Thread) => entity?.family === family)
});


export const selectThreadsByMaker = (maker: string) => 
	createSelector(
		fromVideogameThread.selectAll, 
		(entities : VideogameThread[]) => {
			return entities.filter((entity : VideogameThread) => entity?.maker === maker)
});

export const selectThreadEntity = id => createSelector(
	fromVideogameThread.selectEntities,
	entities => entities[id]
);
