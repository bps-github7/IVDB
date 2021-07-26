import { createSelector } from "@ngrx/store";
import { User } from "src/app/models/user/user.model";
import * as fromUser from 'src/app/store/reducers/user.reducer';
import { AppState } from "../reducers";
import { selectParams, selectQueryParams } from "./router.selector";


// select by titleSubstring
export const selectUserByUsernameSubstring = (username : string) =>
	createSelector(
		fromUser.selectAll,
		(entities : User []) => {
			return entities.filter((entity : User) => (entity.username.toLowerCase()).includes(username.toLowerCase()))
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

export const selectUserByUsernameParam = createSelector(
	fromUser.selectAll,
	selectParams,
	(users, { username } ) => { 
		return users.filter((user : User) => user.username === username.replaceAll("+"," "))[0]
	}
)