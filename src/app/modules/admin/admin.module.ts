import { AdminStoreModule } from './admin.index';
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
import { AdminGameTableComponent } from './admin-game/admin-game-table/admin-game-table.component';
import { AdminGameInfoComponent } from './admin-game/admin-game-info/admin-game-info.component';
import { AdminContentManagerComponent } from './admin-content/admin-content-manager/admin-content-manager.component';

@NgModule({
  declarations: [
		AdminComponent,
		AdminGameComponent,
		AdminContentComponent,
		AdminForumComponent,
		AdminUserComponent,
		AdminDashboardComponent,
		AdminGameFormComponent,
  AdminGameTableComponent,
  AdminGameInfoComponent,
  AdminContentManagerComponent,
	],
  imports: [
		// StoreModule.forFeature('a', reducers),
		// EffectsModule.forFeature([ContentEffects]),
		// EffectsModule.forFeature([GameEffects]),
    CommonModule,
		SharedModule,
		AdminStoreModule,
		AdminRoutingModule
  ]
})
export class AdminModule { }
