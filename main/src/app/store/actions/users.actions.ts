import { createAction, props } from "@ngrx/store";
import { User } from "src/app/models/user/user.model";

// get every document in the collection
export const readUsers = createAction(
	'[User] readUsers',
);

export const readUsersSuccess = createAction(
	'[User] readUsersSuccess',
	props<{users : User[]}>()
);

export const readUserFailure = createAction(
	'[User] readUserFailure',
	props<{message : string}>()
)


export const createUser = createAction(
	'[Users] createUsers',
	props<User>()
	);

export const createUserSuccess = createAction(
	'[User] createUserSuccess',
);

export const createUserFailure = createAction(
	'[User] createUserFailure',
	props<{message : string}>()	
)

export const updateUser = createAction(
	'[User] updateUser',
	props<{id : string, data : Partial<User>}>()
);

// indicates when updating the document was successful
export const updateUserSuccess = createAction(
	'[User] updateUserSuccess',
);


export const updateUserFailure = createAction(
	'[User] updateUserFailure',
	props<{message : string}>()	
)


export const deleteUser = createAction(
	'[User] deleteUser',
	props<{id : string}>()
);

export const deleteUserSuccess = createAction(
	'[User] deleteUserSuccess',
);


export const deleteUserFailure = createAction(
	'[User] deleteUserFailure',
	props<{message : string}>()	
)
