import { createAction, props } from "@ngrx/store";
import { User } from "src/app/models/user/user.model";


// TODO: Double back here if youre having trouble with authentication and actions, kinda blanket copy and pasted for the constructors here.
export const getUser = createAction(
	'[Auth] Get user',
	// props<{payload ?: any}>()
)

export const authenticated = createAction(
	'[Auth] Authenticated',
	props<{payload ?: any}>()
	// props<User>()

)

export const notAuthenticated = createAction(
	'[Auth] Not Authenticated',
	// props<{payload ?: any}>()
	// props<User>()
)

export const googleLogin = createAction(
	'[Auth] Google Login Attempt',
	// props<{payload ?: any}>()
	// props<any>()
)

export const facebookLogin = createAction(
	'[Auth] Facebook Login Attempt',
	// props<{payload ?: any}>()
	// props<{payload : any}>()
	)

export const emailLogin = createAction(
	'[Auth] Email and Password Login Attempt',
	props<{payload ?: any}>()
	)

export const logout = createAction(
	'[Auth] logged out',
	// props<{payload ?: any}>()
)

export const authError = createAction(
	'[Auth] Authentication Error',
	props<{payload ?: any}>()
)

