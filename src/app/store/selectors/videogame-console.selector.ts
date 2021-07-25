import { VideogameConsole } from 'src/app/models/content/videogame-console.model';
import { createSelector } from "@ngrx/store";
import * as fromVideogameConsole from 'src/app/store/reducers/videogame-console.reducer';


// select by titleSubstring
// export const selectByTitleSubstring = (title : string) =>
// 	createSelector(
// 		fromVideogameConsole.selectAll,
// 		(entities : VideogameConsole []) => {
// 			return entities.filter((entity : VideogameConsole) => (entity.e.toLowerCase()).includes(title.toLowerCase()))
// 		} 
// 	)

export const selectConsoleFamily = (family: string) => 
	createSelector(
		fromVideogameConsole.selectAll, 
		(entities : VideogameConsole[]) => {
			return entities.filter((entity : VideogameConsole) => entity?.family === family)
});


export const selectConsolesByMaker = (maker: string) => 
	createSelector(
		fromVideogameConsole.selectAll, 
		(entities : VideogameConsole[]) => {
			return entities.filter((entity : VideogameConsole) => entity?.maker === maker)
});

export const selectConsoleEntity = id => createSelector(
	fromVideogameConsole.selectEntities,
	entities => entities[id]
);
