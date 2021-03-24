import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import { AdminAuthGuard } from 'src/app/common/services/admin-auth-guard.service';
import { AuthGuard } from 'src/app/common/services/auth-guard.service';
import { ConsoleFormComponent } from './forms/console-form/console-form.component';
import { ConsoleInfoFormComponent } from './forms/console-info-form/console-info-form.component';
import { ConsolePostComponent } from './forms/console-post/console-post.component';
import { DescriptorFormComponent } from './forms/descriptor-form/descriptor-form.component';
import { GameFormComponent } from './forms/game-form/game-form.component';
import { GameInfoFormComponent } from './forms/game-info-form/game-info-form.component';
import { PostComponent } from './forms/post/post.component';
import { ForumInfoFormComponent } from './forum/forum-info-form/forum-info-form.component';
import { ManageForumsComponent } from './forum/manage-forums/manage-forums.component';
import { ManageThreadsComponent } from './forum/manage-threads/manage-threads.component';
import { ManageUsersComponent } from './forum/manage-users/manage-users.component';
import { GameInfoComponent } from './game-info/game-info.component';
import { GameComponent } from './game/game.component';


const routes: Routes = [

    { path: 'game/info/new', component: GameInfoFormComponent, canActivate: [AuthGuard, AdminAuthGuard] },
    { path: 'forum/info/new', component: ForumInfoFormComponent, canActivate: [AuthGuard, AdminAuthGuard] },

    { path: 'forum/threads', component: ManageThreadsComponent, canActivate: [AuthGuard, AdminAuthGuard] },
    { path: 'forum/users', component: ManageUsersComponent, canActivate: [AuthGuard, AdminAuthGuard] },
    { path: 'game/info', component: GameInfoComponent, canActivate: [AuthGuard, AdminAuthGuard] },
    { path: 'game/new', component: GameFormComponent, canActivate: [AuthGuard, AdminAuthGuard] },
    { path: 'game/:id', component: GameFormComponent, canActivate: [AuthGuard, AdminAuthGuard] },

    { path: 'forum', component: ManageForumsComponent, canActivate: [AuthGuard, AdminAuthGuard] },
    { path: 'game', component: GameComponent, canActivate: [AuthGuard, AdminAuthGuard] },

    // admin home:
    // { path: '', component: '', canActivate: [AuthGuard, AdminAuthGuard] },
];
@NgModule({ 
   imports: [RouterModule.forChild(routes)], 
   exports: [RouterModule] 
})
export class AdminRoutingModule { } export const AdminComponents = [
    /* Game & game-info management */
    PostComponent,
    GameFormComponent,
    GameInfoFormComponent, 
    GameInfoComponent,
    GameComponent,
    ConsoleFormComponent,
    ConsoleInfoFormComponent,
    ConsolePostComponent,
    DescriptorFormComponent,
        
    /* Forum & forum-info management */
    ForumInfoFormComponent, 
    ManageForumsComponent,
    ManageThreadsComponent, 
    ManageUsersComponent,
    
    

];


