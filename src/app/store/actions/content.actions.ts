import { createAction, props, Action } from "@ngrx/store";
import { Content } from '../reducers/content.reducer';

// get each document in the collection
export const readContent = createAction(
	'[Content] readContent',
);

// need the full object (at least props required by the interface) to create or update
export const createContent = createAction(
	'[Content] createContent',
	props<Content>()
);

export const modifyContent = createAction(
	'[Content] updateContent',
	props<Content>()
);

// all we need for delete and getter is id of the paticular piece of content 

export const deleteContent = createAction(
	'[Content] deleteContent',
	props<{id : string}>()
);

export const getContentDocument = createAction(
	'[Content] getContentDocument',
	props<{id : string}>()
);

// keeping these around from fireship  code along. I think content.effects depends on them, 

//this one handles update of content document, when only partial is passed in
export const updateContent = createAction(
	'[Content] updateContent',
	props<{id : string, data : Partial<Content>}>()
);

// indicates when updating the document was successful
export const contentSuccess = createAction(
	'[Content] contentSuccess',
);

export const contentActionTypes = {
	readContent,
	createContent,
	modifyContent,
	getContentDocument,
	deleteContent,
	updateContent,
	contentSuccess
}