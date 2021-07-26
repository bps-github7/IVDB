import { createSelector } from "@ngrx/store";
import { Rating } from "src/app/models/contrib/rating.model";
import * as fromRating from 'src/app/store/reducers/forum-info.reducer';


// select by titleSubstring
// export const selectRatingByTitleSubstring = (family : string, title : string) => 
// 	createSelector(
// 		selectRatingFamily(family),
// 		(selectedFamily : Rating[]) => {
// 			return selectedFamily.filter((selectedFamily : Rating) =>(selectedFamily.title.toLowerCase()).includes(title.toLowerCase()))
// 		}
// 	)

// export const selectRatingFamily = (family: string) => 
// 	createSelector(
// 		fromRating.selectAll, 
// 		(entities : Rating[]) => {
// 			return entities.filter((entity : Rating) => entity?.family === family)
// });

// export const selectRatingEntity = id => createSelector(
// 	fromRating.selectEntities,
// 	entities => entities[id]
// );