import { createAction, props } from "@ngrx/store";
import { Feedback } from "src/app/models/contrib/feedback.model";

// get every document in the collection
export const readFeedback = createAction(
	'[Feedback] readFeedback',
);

export const readFeedbackSuccess = createAction(
	'[Feedback] readFeedbackSuccess',
	props<{feedback : Feedback[]}>()
);


export const createFeedback = createAction(
	'[Feedbacks] createFeedbacks',
	props<Feedback>()
	);

export const createFeedbackSuccess = createAction(
	'[Feedback] createFeedbackSuccess',
);

export const updateFeedback = createAction(
	'[Feedback] updateFeedback',
	props<{id : string, data : Partial<Feedback>}>()
);

// indicates when updating the document was successful
export const updateFeedbackSuccess = createAction(
	'[Feedback] updateFeedbackSuccess',
);

export const deleteFeedback = createAction(
	'[Feedback] deleteFeedback',
	props<{id : string}>()
);

export const deleteFeedbackSuccess = createAction(
	'[Feedback] deleteFeedbackSuccess',
);