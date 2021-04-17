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
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDialogModule} from '@angular/material/dialog'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatTooltipModule} from '@angular/material/tooltip'; 
// import {MatRadioModule} from '@angular/material/radio'; 
import {MatTableModule} from '@angular/material/table'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatChipsModule} from '@angular/material/chips'; 
import { GameFormComponent } from './forms/game-form/game-form.component';
import { SiteDashboardComponent } from './site-dashboard/site-dashboard.component';
import { EditStreamComponent } from './forms/edit-stream/edit-stream.component';
import { EditNewsComponent } from './forms/edit-news/edit-news.component';
import { EditWatchlistComponent } from './forms/edit-watchlist/edit-watchlist.component';



@NgModule({
  declarations: [
    AdminComponent,
    GameFormComponent,
    DescriptorFormComponent,
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
    GameInfoFormComponent,
    SiteDashboardComponent,
    EditStreamComponent,
    EditNewsComponent,
    EditWatchlistComponent,

],
  entryComponents: [
      EditNewsComponent,
      EditStreamComponent,
      EditWatchlistComponent
  ],
  providers: [],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    MatButtonModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatTableModule, 
    MatTooltipModule,
    // MatRadioModule,
    MatChipsModule,
    MatInputModule,
    MatFormFieldModule
]
})

export class AdminModule { }
