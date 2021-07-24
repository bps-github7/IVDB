import { createAction, props, Action } from "@ngrx/store";
import { Rating } from "src/app/models/contrib/rating.model";

// get every document in the collection
export const readRatings = createAction(
	'[Rating] readRatings',
);

export const readRatingsSuccess = createAction(
	'[Rating] readRatingsSuccess',
	props<{ratings : Rating[]}>()
);


export const createRating = createAction(
	'[Ratings] createRatings',
	props<Rating>()
	);

export const createRatingSuccess = createAction(
	'[Rating] createRatingSuccess',
);

export const updateRating = createAction(
	'[Rating] updateRating',
	props<{id : string, data : Partial<Rating>}>()
);

// indicates when updating the document was successful
export const updateRatingSuccess = createAction(
	'[Rating] updateRatingSuccess',
);

export const deleteRating = createAction(
	'[Rating] deleteRating',
	props<{id : string}>()
);

export const deleteRatingSuccess = createAction(
	'[Rating] deleteRatingSuccess',
);

export const ratingActionTypes = {
	readRatings,
	readRatingsSuccess,
	createRating,
	createRatingSuccess,
	deleteRating,
	deleteRatingSuccess,
	updateRating,
	updateRatingSuccess
}