import { UsersEffects } from 'src/app/store/effects/users.effects';
import { ThreadEffects } from 'src/app/store/effects/thread.effects';
import { NgModule } from '@angular/core';

import { ActionReducer, ActionReducerMap } from "@ngrx/store";
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
import { GameEffects } from 'src/app/store/effects/game.effects';
import { ForumEffects } from 'src/app/store';
import { ForumInfoEffects } from 'src/app/store';
import { VideogameConsoleEffects } from 'src/app/store/effects/videogame-console.effects';
import { ThreadReducer } from 'src/app/store/reducers/thread.reducer';
import { UsersReducer } from 'src/app/store/reducers/users.reducer';


//** I dont think this is working */
export const effects : any [] = [ContentEffects, GameInfoEffects];

export const reducers : ActionReducerMap<any> = {
	game : GameReducer,
	gameInfo : GameInfoReducer,
	content : ContentReducer,
	videogameConsole : VideogameConsoleReducer,
	forum : ForumReducer,
	forumInfo : ForumInfoReducer,
	thread : ThreadReducer
}


@NgModule({
  declarations: [],
  imports: [

		// StoreModule.forFeature('admin', reducers),
		StoreModule.forFeature('game', GameReducer),
		StoreModule.forFeature('gameInfo', GameInfoReducer),
		StoreModule.forFeature('content', ContentReducer),
		StoreModule.forFeature('videogameConsole', VideogameConsoleReducer),
		StoreModule.forFeature('forum', ForumReducer),
		StoreModule.forFeature('forumInfo', ForumInfoReducer),
		StoreModule.forFeature('thread', ThreadReducer),
		StoreModule.forFeature('users', UsersReducer),


		EffectsModule.forFeature([ContentEffects]),
		EffectsModule.forFeature([GameInfoEffects]),
		EffectsModule.forFeature([GameEffects]),
		EffectsModule.forFeature([VideogameConsoleEffects]),
		EffectsModule.forFeature([ForumInfoEffects]),
		EffectsModule.forFeature([ForumEffects]),
		EffectsModule.forFeature([ThreadEffects]),
		EffectsModule.forFeature([UsersEffects])
	],
	exports: [ ]
})
export class AdminStoreModule { }
