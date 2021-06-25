import { createAction, props, Action } from "@ngrx/store";
import { Content } from '../reducers/content.reducer';

// get every document in the collection
export const readContent = createAction(
	'[Content] readContent',
);

export const readContentSuccess = createAction(
	//**note: it returns contents . note the plural  */
	'[Content] readContentSuccess',
	(contents : ReadonlyArray<Content>) => contents,
	// props<{contents : ReadonlyArray<Content>}>()
);


// this is the inverse of readContent and readContentSuccess because we need to pass a value in
// when we dispatch createContentSuccess in order for it to be returned to the reducer
export const createContent = createAction(
	'[Content] createContent',
	(newContent : Content) => newContent
);

export const createContentSuccess = createAction(
	'[Content] createContentSuccess',
	props<Content>()

);


//not sure how this one is used/ how is it unique from updateContent?
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