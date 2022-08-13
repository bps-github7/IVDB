import { createSelector } from "@ngrx/store";
import { AppState } from "..";

export const selectParams = createSelector(
	(state : AppState) => state.router.state,
	(state) => state.params
)

export const selectQueryParams = createSelector(
	(state : AppState) => state.router.state,
	(state) => state.queryParams
)
