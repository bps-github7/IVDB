import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing';
import { SharedModule } from '../shared/shared.module';
import { PostComponent } from './forms/post/post.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ConsoleInfoFormComponent } from './forms/console-info-form/console-info-form.component';
import { DescriptorFormComponent } from './forms/descriptor-form/descriptor-form.component';
import { GameInfoFormComponent } from './forms/game-info-form/game-info-form.component';
import { ForumDashboardComponent } from './forum/forum-dashboard/forum-dashboard.component';
import { ForumInfoFormComponent } from './forum/forum-info-form/forum-info-form.component';
import { ManageForumsComponent } from './forum/manage-forums/manage-forums.component';
import { GameInfoComponent } from './game-info/game-info.component';
import { GameComponent } from './game/game.component';
import { AdminComponent } from './admin.component';
import { ConsolePostComponent } from './forms/console-post/console-post.component';
import { ConsoleFormComponent } from './forms/console-form/console-form.component';



@NgModule({
  declarations: [
    DescriptorFormComponent,
    AdminComponent,
    ConsoleInfoFormComponent,
    AdminDashboardComponent,
    GameInfoComponent,
    GameComponent,
    ForumDashboardComponent,
    ForumInfoFormComponent,
    ManageForumsComponent,
    GameComponent,
    PostComponent,
    ConsoleFormComponent,
    ConsolePostComponent,
    GameInfoFormComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
]
})

export class AdminModule { }
