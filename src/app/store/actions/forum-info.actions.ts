import { createAction, props, Action } from "@ngrx/store";
import { ForumInfo } from 'src/app/models/content/forum-info.model';

// get every document in the collection
export const readForumInfo = createAction(
	'[ForumInfo] readForumInfo',
);

export const readForumInfoSuccess = createAction(
	'[ForumInfo] readForumInfoSuccess',
	props<{forumInfo : ForumInfo[]}>()
);

// came across a weird one, which forced out hand -> gameInfo.type is now gameInfo.family
// apparently - action doesnt respond well to objects passed into props with attribute 'type'
export const createForumInfo = createAction(
	'[ForumInfo] createForumInfo',
	props<ForumInfo>()
);

export const createForumInfoSuccess = createAction(
	'[ForumInfo] createForumInfoSuccess',
);

export const updateForumInfo = createAction(
	'[ForumInfo] updateForumInfo',
	props<{id : string, data : Partial<ForumInfo>}>()
);

export const updateForumInfoSuccess = createAction(
	'[ForumInfo] updateForumInfoSuccess',
);

export const deleteForumInfo = createAction(
	'[ForumInfo] deleteForumInfo',
	props<{id : string}>()
);

export const deleteForumInfoSuccess = createAction(
	'[ForumInfo] deleteForumInfoSuccess',
);

export const forumInfoActionTypes = {

	readForumInfo,
	readForumInfoSuccess,
	createForumInfo,
	createForumInfoSuccess,
	deleteForumInfo,
	deleteForumInfoSuccess,
	updateForumInfo,
	updateForumInfoSuccess
}