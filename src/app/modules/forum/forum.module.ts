import { ForumComponent } from './forum.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForumRoutingModule } from './forum-routing.module';
import { ForumBrowserComponent } from './forum-browser/forum-browser.component';
import { ForumViewComponent } from './forum-view/forum-view.component';
import { ForumStoreModule } from './forum.index';
import { ForumListComponent } from './forum-browser/forum-list/forum-list.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ForumComponent, ForumBrowserComponent, ForumViewComponent, ForumListComponent],
  imports: [
    CommonModule,
		SharedModule,
    ForumRoutingModule,
    ForumStoreModule
  ]
})
export class ForumModule { }
