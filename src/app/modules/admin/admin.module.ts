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
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';

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
		MatButtonModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatTableModule, 
    MatTooltipModule,
    
    MatProgressBarModule,
    // MatRadioModule,
    MatChipsModule,
    MatInputModule,
    MatFormFieldModule,
    CommonModule,
		SharedModule,
		AdminStoreModule,
		AdminRoutingModule
  ]
})
export class AdminModule { }
