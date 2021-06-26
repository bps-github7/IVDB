import { createAction, props, Action } from "@ngrx/store";
import { Content } from '../reducers/content.reducer';

// get every document in the collection
export const readContent = createAction(
	'[Content] readContent',
);

export const readContentSuccess = createAction(
	//**note: it returns contents . note the plural  */
	'[Content] readContentSuccess',
	// (contents : ReadonlyArray<Content>) => contents,
	props<{contents : Content[]}>()
);


// this is the inverse of readContent and readContentSuccess because we need to pass a value in
// when we dispatch createContentSuccess in order for it to be returned to the reducer
export const createContent = createAction(
	'[Content] createContent',
	// (newContent : Content) => newContent
	props<Content>()
	);

export const createContentSuccess = createAction(
	'[Content] createContentSuccess',
	// props<Content>()

);

//this one handles update of content document, when only partial is passed in
export const updateContent = createAction(
	'[Content] updateContent',
	props<{id : string, data : Partial<Content>}>()
);

// indicates when updating the document was successful
export const updateContentSuccess = createAction(
	'[Content] contentSuccess',
);



// all we need for delete and getter is id of the paticular piece of content 
export const deleteContent = createAction(
	'[Content] deleteContent',
	props<{id : string}>()
);

export const deleteContentSuccess = createAction(
	'[Content] deleteContentSuccess',
	// props<{id : string}>()
);

// can probably accomplish this with map(filter(item => item.id === some.id)) on the store
// export const getContentDocument = createAction(
// 	'[Content] getContentDocument',
// 	props<{id : string}>()
// );


export const contentActionTypes = {
	readContent,
	createContent,
	createContentSuccess,
	// getContentDocument,
	deleteContent,
	deleteContentSuccess,
	updateContent,
	updateContentSuccess
}