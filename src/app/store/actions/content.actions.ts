import { createAction, props } from "@ngrx/store";
import { Content } from 'src/app/models/content/content.model';

// get every document in the collection
export const readContent = createAction(
	'[Content] readContent',
);

export const readContentSuccess = createAction(
	'[Content] readContentSuccess',
	props<{contents : Content[]}>()
);


export const createContent = createAction(
	'[Content] createContent',
	props<Content>()
	);

export const createContentSuccess = createAction(
	'[Content] createContentSuccess',
);

export const updateContent = createAction(
	'[Content] updateContent',
	props<{id : string, data : Partial<Content>}>()
);

// indicates when updating the document was successful
export const updateContentSuccess = createAction(
	'[Content] contentSuccess',
);

export const deleteContent = createAction(
	'[Content] deleteContent',
	props<{id : string}>()
);

export const deleteContentSuccess = createAction(
	'[Content] deleteContentSuccess',
);