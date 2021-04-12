import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { GameInfoFormComponent } from './forms/game-info-form/game-info-form.component';
import { GameComponent } from './game/game.component';
import { ForumInfoFormComponent } from './forum/forum-info-form/forum-info-form.component';
import { ManageForumsComponent } from './forum/manage-forums/manage-forums.component';
import { ForumDashboardComponent } from './forum/forum-dashboard/forum-dashboard.component';
 
 
const routes: Routes = [
    { path: 'admin', component: AdminDashboardComponent },
    { path: 'admin/game', component: GameComponent },
    { path: 'admin/forum', component: ForumDashboardComponent },
    { path: 'admin/forum/:id', component: ManageForumsComponent },
    { path: 'admin/forum/info', component: ForumInfoFormComponent }, 
    { path: 'admin/game/:id', component: GameComponent },
    { path: 'admin/game/info', component: GameInfoFormComponent }
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { } export const AdminComponents = [
    AdminDashboardComponent,
    GameComponent,
    ForumDashboardComponent,
    ManageForumsComponent,
    GameComponent,
    GameInfoFormComponent
]
 