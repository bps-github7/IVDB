import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { GameInfoFormComponent } from './forms/game-info-form/game-info-form.component';
import { GameComponent } from './game/game.component';
import { ForumInfoFormComponent } from './forum/forum-info-form/forum-info-form.component';
import { ManageForumsComponent } from './forum/manage-forums/manage-forums.component';
import { ForumDashboardComponent } from './forum/forum-dashboard/forum-dashboard.component';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../shared/shared.module';
 
const routes: Routes = [
    { path: '', component: AdminComponent,
    children: [
        { path: 'game', component: GameComponent },
        { path: 'forum', component: ForumDashboardComponent },
        { path: 'forum/:id', component: ManageForumsComponent },
        { path: 'forum/info', component: ForumInfoFormComponent }, 
        { path: 'game/:id', component: GameComponent },
        { path: 'game/info', component: GameInfoFormComponent }
    ]
    },
    
];
 
@NgModule({
  imports: [
    SharedModule,  
    RouterModule.forChild(routes)],
  exports: [
    // unclear whether we should be doing this...
    SharedModule,  
    RouterModule]
})
export class AdminRoutingModule { } export const AdminComponents = [
    AdminComponent,   
    AdminDashboardComponent,
    GameComponent,
    ForumDashboardComponent,
    ForumInfoFormComponent,
    ManageForumsComponent,
    GameComponent,
    GameInfoFormComponent
]
 