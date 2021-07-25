import { createSelector } from "@ngrx/store";
import { Game } from "src/app/models/content/game.model";
import * as fromGame from 'src/app/store/reducers/game.reducer';
import { AppState } from "../reducers";
import { selectParams, selectQueryParams } from "./router.selector";

