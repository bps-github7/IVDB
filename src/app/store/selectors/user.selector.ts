import { createSelector } from "@ngrx/store";
import { User } from "src/app/models/user/user.model";
import * as fromUser from 'src/app/store/reducers/user.reducer';
import {take} from 'rxjs';

// select by titleSubstring
export const selectAuthenticatedUser = () =>
	createSelector(
		fromUser.selectAll,
		(entities : User []) => {
			
			return entities[0]
		} 
	)
