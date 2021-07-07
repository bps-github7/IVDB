import { NgModule } from '@angular/core';

import { ActionReducerMap } from "@ngrx/store";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects'

// reducers
import { ContentReducer } from "src/app/store/reducers/content.reducer";
import { GameReducer } from "src/app/store/reducers/game.reducer";
import { GameInfoReducer } from "src/app/store/reducers/game-info.reducer";
import { VideogameConsoleReducer } from 'src/app/store/reducers/videogame-console.reducer';
import { ForumInfoReducer } from 'src/app/store/reducers/forum-info.reducer';
import { ForumReducer } from 'src/app/store/reducers/forum.reducer';

// effects
import { GameInfoEffects } from 'src/app/store/effects/game-info.effects';
import { ContentEffects } from 'src/app/store/effects/content.effects';
import { GameEffects } from '../../store/effects/game.effects';
import { ForumEffects } from 'src/app/store';
import { ForumInfoEffects } from 'src/app/store';
import { VideogameConsoleEffects } from 'src/app/store/effects/videogame-console.effects';

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
		StoreModule.forFeature('videogameConsole', VideogameConsoleReducer),
		StoreModule.forFeature('forum', ForumReducer),
		StoreModule.forFeature('forumInfo', ForumInfoReducer),

		EffectsModule.forFeature([ContentEffects]),
		EffectsModule.forFeature([GameInfoEffects]),
		EffectsModule.forFeature([GameEffects]),
		EffectsModule.forFeature([VideogameConsoleEffects]),
		EffectsModule.forFeature([ForumInfoEffects]),
		EffectsModule.forFeature([ForumEffects])

	],
	// exports: [
	// 	StoreModule.forFeature('admin module', reducers),
	// 	EffectsModule.forFeature([ContentEffects]),
	// 	EffectsModule.forFeature([GameEffects]),
  // ]
})
export class AdminStoreModule { }
