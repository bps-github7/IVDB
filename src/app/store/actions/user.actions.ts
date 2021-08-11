import { createAction, props } from "@ngrx/store";
import { User } from "src/app/models/user/user.model";


// TODO: Double back here if youre having trouble with authentication and actions, kinda blanket copy and pasted for the constructors here.
export const getUser = createAction(
	'[Auth] Get user',
	props<{payload ?: any}>()
)

export const authenticated = createAction(
	'[Auth] Authenticated',
	props<User>()
)

export const notAuthenticated = createAction(
	'[Auth] Not Authenticated',
	props<User>()
)

export const googleLogin = createAction(
	'[Auth] Google Login Attempt',
	// props<any>()
)

export const facebookLogin = createAction(
	'[Auth] Facebook Login Attempt',
	// props<{payload : any}>()
	)

export const emailLogin = createAction(
	'[Auth] Email and Password Login Attempt',
	props<{payload : any}>()
	)

export const logout = createAction(
	'[Auth] logged out',
	props<{payload ?: any}>()
)

export const authError = createAction(
	'[Auth] Authentication Error',
	props<{payload : any}>()
)


// get every document in the collection
export const readUsers = createAction(
	'[User] readUsers',
);

export const readUsersSuccess = createAction(
	'[User] readUsersSuccess',
	props<{users : User[]}>()
);


export const createUser = createAction(
	'[Users] createUsers',
	props<User>()
	);

export const createUserSuccess = createAction(
	'[User] createUserSuccess',
);

export const updateUser = createAction(
	'[User] updateUser',
	props<{id : string, data : Partial<User>}>()
);

// indicates when updating the document was successful
export const updateUserSuccess = createAction(
	'[User] updateUserSuccess',
);

export const deleteUser = createAction(
	'[User] deleteUser',
	props<{id : string}>()
);

export const deleteUserSuccess = createAction(
	'[User] deleteUserSuccess',
);