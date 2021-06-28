import { NgModule } from '@angular/core';

import { ActionReducerMap } from "@ngrx/store";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects'

// reducers
import { ContentReducer } from "src/app/store/reducers/content.reducer";
import { GameReducer } from "src/app/store/reducers/game.reducer";
import { GameInfoReducer } from "src/app/store/reducers/game-info.reducer";

// effects
import { GameInfoEffects } from 'src/app/store/effects/game-info.effects';
import { ContentEffects } from 'src/app/store/effects/content.effects';
import { GameEffects } from '../../store/effects/game.effects';
// import { ContributionEffects } from '../../store/effects/contribution.effects';
// import { ForumEffects } from './forum.effects';


//** I dont think this is working */
// export const effects : any [] = [ContentEffects, GameEffects, ContributionEffects, GameInfoEffects, ForumEffects];
export const effects : any [] = [ContentEffects, GameInfoEffects];



@NgModule({
  declarations: [],
  imports: [

		StoreModule.forFeature('game', GameReducer),
		StoreModule.forFeature('gameInfo', GameInfoReducer),
		StoreModule.forFeature('content', ContentReducer),
		EffectsModule.forFeature([ContentEffects]),
		EffectsModule.forFeature([GameInfoEffects]),
		EffectsModule.forFeature([GameEffects]),
  ],
	// exports: [
	// 	StoreModule.forFeature('admin module', reducers),
	// 	EffectsModule.forFeature([ContentEffects]),
	// 	EffectsModule.forFeature([GameEffects]),
  // ]
})
export class AdminStoreModule { }
