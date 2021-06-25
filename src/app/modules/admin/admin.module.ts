import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminGameComponent } from './admin-game/admin-game.component';
import { AdminContentComponent } from './admin-content/admin-content.component';
import { AdminForumComponent } from './admin-forum/admin-forum.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { AdminGameFormComponent } from './admin-game/admin-game-form/admin-game-form.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
// import { ContentEffects } from 'src/app/effects/content.effects';

// import { ContentReducer } from 'src/app/reducers/content.reducer';
import { reducers } from 'src/app/store/reducers';
import { ContentEffects, effects } from 'src/app/modules/admin/admin.index';
import { GameInfoEffects } from 'src/app/store/effects/game-info.effects';
import { ContentReducer } from 'src/app/store/reducers/content.reducer';
import { GameInfoReducer } from 'src/app/store/reducers/game-info.reducer';


@NgModule({
  declarations: [AdminComponent, AdminGameComponent, AdminContentComponent, AdminForumComponent, AdminUserComponent, AdminDashboardComponent, AdminGameFormComponent],
  imports: [
    CommonModule,
		SharedModule,
		StoreModule.forFeature('content', ContentReducer),
		// EffectsModule.forFeature([ContentEffects]),
		EffectsModule.forFeature([ContentEffects]),
    AdminRoutingModule
  ]
})
export class AdminModule { }
