import { createSelector } from "@ngrx/store";
import { User } from "src/app/models/user/user.model";
import * as fromUsers from 'src/app/store/reducers/users.reducer';
import { selectParams } from "./router.selector";


// select by titleSubstring
export const selectUserByDisplayNameSubstring = (displayName: string) =>
	createSelector(
		fromUsers.selectAll,
		(entities : User []) => {
			return entities.filter((entity : User) => (entity.displayName.toLowerCase()).includes(displayName.toLowerCase()))
		} 
	)

export const selectUserByDisplayNameExactMatch = (displayName: string) =>
	createSelector(
		fromUsers.selectAll,
		(entities : User []) => {
			// keeping the lowercase on both terms, to avoid many identically spelled usernames with unique case.
			return entities.filter((entity : User) => (entity.displayName.toLowerCase()) == displayName.toLowerCase())
		} 
	)

export const uniqueDisplayName = (displayName) => 
		createSelector(
			fromUsers.selectAll,
			(entities : User[]) => {
				entities.filter((entity : User) => (entity.displayName.toLowerCase()) == displayName.toLowerCase())
				console.log("hi from selector")
				console.log(entities)
				if (entities.length){
					return true
				}
				return false;
			}
		)


export const selectUserById = (id : string) =>
	/* returns a single user object */ 
		createSelector(
			fromUsers.selectAll,
			(entities : User []) => {
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
	fromUsers.selectEntities,
	entities => entities[id]
);

export const selectUserByIdParam = createSelector(
	fromUsers.selectAll,
	selectParams,
	(users, { userId }) => {	
		return users.filter((user : User) => user.id === userId )[0];
	}	
)

export const selectUserByDisplayNameParam = createSelector(
	fromUsers.selectAll,
	selectParams,
	(users, { displayName } ) => { 
		return users.filter((user : User) => user.displayName === displayName.replaceAll("-"," "))[0]
	}
)