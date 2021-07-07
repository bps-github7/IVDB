import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { ForumReducer } from 'src/app/store/reducers/forum.reducer';
import { ForumInfoReducer } from 'src/app/store/reducers/forum-info.reducer';
import { ForumEffects } from 'src/app/store';
import { ForumInfoEffects } from 'src/app/store';

@NgModule({
  declarations: [],
  imports: [
		StoreModule.forFeature('forum', ForumReducer),
		StoreModule.forFeature('forumInfo', ForumInfoReducer),
		EffectsModule.forFeature([ForumEffects]),
		EffectsModule.forFeature([ForumInfoEffects])
	]
})
export class ForumStoreModule { }
