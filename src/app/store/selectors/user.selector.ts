import { createSelector } from "@ngrx/store";
import { User } from "src/app/models/user/user.model";
import * as fromUser from 'src/app/store/reducers/user.reducer';
import { selectParams } from "./router.selector";


// select by titleSubstring
export const selectUserByDisplayNameSubstring = (displayName: string) =>
	createSelector(
		fromUser.selectAll,
		(entities : User []) => {
			return entities.filter((entity : User) => (entity.displayName.toLowerCase()).includes(displayName.toLowerCase()))
		} 
	)

export const selectUserById = (id : string) => 
		createSelector(
			fromUser.selectAll,
			(entities : User []) => {
				console.log(id)
				return entities.filter((entity : User) => (entity?.id === id))[0]
			}
		)

// export const selectUserFamily = (family: string) => 
// 	createSelector(
// 		fromUser.selectAll, 
// 		(entities : User[]) => {
// 			return entities.filter((entity : User) => entity?.family === family)
// });

export const selectUserEntity = id => createSelector(
	fromUser.selectEntities,
	entities => entities[id]
);

export const selectUserByIdParam = createSelector(
	fromUser.selectAll,
	selectParams,
	(users, { userId }) => {	
		return users.filter((user : User) => user.id === userId )[0];
	}	
)

export const selectUserByDisplayNameParam = createSelector(
	fromUser.selectAll,
	selectParams,
	(users, { displayName } ) => { 
		return users.filter((user : User) => user.displayName === displayName.replaceAll("+"," "))[0]
	}
)