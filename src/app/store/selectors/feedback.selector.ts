import { createSelector } from "@ngrx/store";
import { Feedback } from "src/app/models/contrib/feedback.model";
import * as fromFeedback from 'src/app/store/reducers/feedback.reducer';
import { selectParams } from "./router.selector";



// export const selectByTitleSubstring = (title : string) =>
// 	createSelector(
// 		fromFeedback.selectAll,
// 		(entities : Feedback []) => {
// 			return entities.filter((entity : Feedback) => (entity.title.toLowerCase()).includes(title.toLowerCase()))
// 		} 
// 	)

export const selectEntity = id => createSelector(
	fromFeedback.selectEntities,
	entities => entities[id]
);

export const getFeedbackByIdParam = createSelector(
	fromFeedback.selectAll,
	selectParams,
	(feedbacks, { feedbackId } ) => { 
		return feedbacks.filter((feedback : Feedback) => feedback.id === feedbackId)[0]
	}
)

// export const getFeedbackByTitleParam = createSelector(
// 	fromFeedback.selectAll,
// 	selectParams,
// 	(feedbacks, { feedbackTitle } ) => { 
// 		return feedbacks.filter((feedback : Feedback) => feedback.title === feedbackTitle.replaceAll("+"," "))[0]
// 	}
// )