import { createAction, props } from "@ngrx/store";
import { Review } from "src/app/models/contrib/review.model";

// get every document in the collection
export const readReviews = createAction(
	'[Review] readReviews',
);

export const readReviewsSuccess = createAction(
	'[Review] readReviewsSuccess',
	props<{reviews : Review[]}>()
);


export const createReview = createAction(
	'[Reviews] createReviews',
	props<Review>()
	);

export const createReviewSuccess = createAction(
	'[Review] createReviewSuccess',
);

export const updateReview = createAction(
	'[Review] updateReview',
	props<{id : string, data : Partial<Review>}>()
);

// indicates when updating the document was successful
export const updateReviewSuccess = createAction(
	'[Review] updateReviewSuccess',
);

export const deleteReview = createAction(
	'[Review] deleteReview',
	props<{id : string}>()
);

export const deleteReviewSuccess = createAction(
	'[Review] deleteReviewSuccess',
);