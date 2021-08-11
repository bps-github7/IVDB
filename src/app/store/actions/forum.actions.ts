import { createAction, props } from "@ngrx/store";
import { Forum } from "src/app/models/content/forum.model";

// get every document in the collection
export const readForum = createAction(
	'[Forum] readForum',
);

export const readForumSuccess = createAction(
	'[Forum] readForumSuccess',
	props<{forums : Forum[]}>()
);

export const createForum = createAction(
	'[Forum] createForum',
	props<Forum>()
);

export const createForumSuccess = createAction(
	'[Forum] createForumSuccess',
);

export const updateForum = createAction(
	'[Forum] updateForum',
	props<{id : string, data : Partial<Forum>}>()
);

export const updateForumSuccess = createAction(
	'[Forum] updateForumSuccess',
);

export const deleteForum = createAction(
	'[Forum] deleteForum',
	props<{id : string}>()
);

export const deleteForumSuccess = createAction(
	'[Forum] deleteForumSuccess',
);