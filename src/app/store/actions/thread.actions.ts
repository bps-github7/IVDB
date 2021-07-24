import { createAction, props, Action } from "@ngrx/store";
import { Thread } from "src/app/models/contrib/thread.model";

// get all threads in thread collection
export const readThreads = createAction(
	'[Thread] readThreads',
);

export const readThreadsSuccess = createAction(
	'[Thread] readThreadsSuccess',
	props<{threads : Thread[]}>()
);


export const createThread = createAction(
	'[Threads] createThreads',
	props<Thread>()
	);

export const createThreadSuccess = createAction(
	'[Thread] createThreadSuccess',
);

export const updateThread = createAction(
	'[Thread] updateThread',
	props<{id : string, data : Partial<Thread>}>()
);

// indicates when updating the document was successful
export const updateThreadSuccess = createAction(
	'[Thread] updateThreadSuccess',
);

export const deleteThread = createAction(
	'[Thread] deleteThread',
	props<{id : string}>()
);

export const deleteThreadSuccess = createAction(
	'[Thread] deleteThreadSuccess',
);

export const threadActionTypes = {
	readThreads,
	readThreadsSuccess,
	createThread,
	createThreadSuccess,
	deleteThread,
	deleteThreadSuccess,
	updateThread,
	updateThreadSuccess
}