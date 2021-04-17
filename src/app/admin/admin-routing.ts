import { AdminAuthGuard } from './../services/admin-auth-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { GameInfoComponent } from './game-info/game-info.component';
import { GameInfoFormComponent } from './forms/game-info-form/game-info-form.component';
import { GameComponent } from './game/game.component';
import { ForumInfoFormComponent } from './forum/forum-info-form/forum-info-form.component';
import { ManageForumsComponent } from './forum/manage-forums/manage-forums.component';
import { ForumDashboardComponent } from './forum/forum-dashboard/forum-dashboard.component';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../shared/shared.module';
import { PostComponent } from './forms/post/post.component';
import { DescriptorFormComponent } from './forms/descriptor-form/descriptor-form.component';
import { ConsoleInfoFormComponent } from './forms/console-info-form/console-info-form.component';
import { GameFormComponent } from './forms/game-form/game-form.component';
import { SiteDashboardComponent } from './site-dashboard/site-dashboard.component';
 

//need to reincorperate the admin-auth-guard
const routes: Routes = [
    { path: '', component: AdminComponent,
    children: [
        { path: 'game', component: GameComponent },
        { path: 'forum', component: ForumDashboardComponent },
        { path: 'site', component: SiteDashboardComponent  },
        { path: 'forum/:id', component: ManageForumsComponent },
        { path: 'forum/info', component: ForumInfoFormComponent }, 
        { path: 'game/new', component: GameFormComponent },
        { path: 'game/new/:id', component: GameFormComponent },
        { path: 'game/info/new', component: GameInfoFormComponent }
    ]
    },
    
];
 
@NgModule({
  imports: [
    SharedModule,  
    RouterModule.forChild(routes)],
  exports: [
    // unclear whether we should be doing this...  
    RouterModule]
})
export class AdminRoutingModule { }