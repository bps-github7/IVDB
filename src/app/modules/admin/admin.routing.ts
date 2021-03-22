import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import { AdminAuthGuard } from 'src/app/common/services/admin-auth-guard.service';
import { AuthGuard } from 'src/app/common/services/auth-guard.service';
import { ForumInfoFormComponent } from 'src/app/components/admin/forum/forum-info-form/forum-info-form.component';
import { ManageForumsComponent } from 'src/app/components/admin/forum/manage-forums/manage-forums.component';
import { ManageThreadsComponent } from 'src/app/components/admin/forum/manage-threads/manage-threads.component';
import { ManageUsersComponent } from 'src/app/components/admin/forum/manage-users/manage-users.component';
import { GameFormComponent } from 'src/app/components/admin/game-form/game-form.component';
import { GameInfoFormComponent } from 'src/app/components/admin/game-info-form/game-info-form.component';
import { GameInfoComponent } from 'src/app/components/admin/game-info/game-info.component';
import { GameComponent } from 'src/app/components/admin/game/game.component';

const routes: Routes = [
{ path: 'admin/forum/info/new', component: ForumInfoFormComponent, canActivate: [AuthGuard, AdminAuthGuard] },
    { path: 'admin/game/info/new', component: GameInfoFormComponent, canActivate: [AuthGuard, AdminAuthGuard] },
    { path: 'admin/game/info', component: GameInfoComponent, canActivate: [AuthGuard, AdminAuthGuard] },
    { path: 'admin/game/new', component: GameFormComponent, canActivate: [AuthGuard, AdminAuthGuard] },
    { path: 'admin/forum/threads', component: ManageThreadsComponent, canActivate: [AuthGuard, AdminAuthGuard] },
    { path: 'admin/forum/users', component: ManageUsersComponent, canActivate: [AuthGuard, AdminAuthGuard] },
    { path: 'admin/game/:id', component: GameFormComponent, canActivate: [AuthGuard, AdminAuthGuard] },
    { path: 'admin/game', component: GameComponent, canActivate: [AuthGuard, AdminAuthGuard] },
    { path: 'admin/forum', component: ManageForumsComponent, canActivate: [AuthGuard, AdminAuthGuard] },

     
];
@NgModule({ 
   imports: [RouterModule.forRoot(routes)], 
   exports: [RouterModule] 
})
export class AdminRoutingModule { } export const AdminComponents = [
    ForumInfoFormComponent, 
    ManageForumsComponent,
    ManageThreadsComponent, 
    ManageUsersComponent,
    GameFormComponent,
    GameInfoFormComponent, 
    GameInfoComponent,
    GameComponent,
];


