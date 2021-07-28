//imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/* custom imports that help the admin module work- routes, store + effects, reusable component lib */
import { AdminRoutingModule } from './admin-routing.module';
import { AdminStoreModule } from './admin.index';
import { SharedModule } from '../shared/shared.module';

//declarations
import { AdminComponent } from './admin.component';
import { AdminGameComponent } from './admin-game/admin-game.component';
import { AdminContentComponent } from './admin-content/admin-content.component';
import { AdminForumComponent } from './admin-forum/admin-forum.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminGameFormComponent } from './admin-game/admin-game-form/admin-game-form.component';
import { AdminGameTableComponent } from './admin-game/admin-game-table/admin-game-table.component';
import { AdminGameInfoComponent } from './admin-game/admin-game-info/admin-game-info.component';
import { AdminContentManagerComponent } from './admin-content/admin-content-manager/admin-content-manager.component';
import { AdminConsolesComponent } from './admin-game/admin-consoles/admin-consoles.component';
import { AdminForumFormComponent } from './admin-forum/admin-forum-form/admin-forum-form.component';
import { AdminDashboardInfoTableComponent } from './admin-dashboard/admin-dashboard-info-table/admin-dashboard-info-table.component';
import { AdminDashboardTableManagerComponent } from './admin-dashboard/admin-dashboard-table-manager/admin-dashboard-table-manager.component';
import { AdminDashboardFormComponent } from './admin-dashboard/admin-dashboard-form/admin-dashboard-form.component';
import { AdminForumInfoComponent } from './admin-forum/admin-forum-info/admin-forum-info.component';
import { AdminThreadsComponent } from './admin-forum/admin-threads/admin-threads.component';

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
		AdminConsolesComponent,
		AdminForumFormComponent,
  AdminDashboardInfoTableComponent,
  AdminDashboardTableManagerComponent,
  AdminDashboardFormComponent,
  AdminForumInfoComponent,
  AdminThreadsComponent,
	],
  imports: [
    CommonModule,
		SharedModule,
		AdminStoreModule,
		AdminRoutingModule
  ]
})
export class AdminModule { }