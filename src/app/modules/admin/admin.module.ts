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
import { reducers } from 'src/app/reducers';
import { effects } from 'src/app/modules/admin/admin.index';


@NgModule({
  declarations: [AdminComponent, AdminGameComponent, AdminContentComponent, AdminForumComponent, AdminUserComponent, AdminDashboardComponent, AdminGameFormComponent],
  imports: [
    CommonModule,
		SharedModule,
		StoreModule.forFeature('adminModule', reducers),
		// EffectsModule.forFeature([ContentEffects]),
		EffectsModule.forFeature(effects),
    AdminRoutingModule
  ]
})
export class AdminModule { }
