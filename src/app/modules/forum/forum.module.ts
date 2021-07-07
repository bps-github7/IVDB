import { ForumComponent } from './forum.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForumRoutingModule } from './forum-routing.module';
import { ForumBrowserComponent } from './forum-browser/forum-browser.component';
import { ForumViewComponent } from './forum-view/forum-view.component';
import { ForumStoreModule } from './forum.index';


@NgModule({
  declarations: [ForumComponent, ForumBrowserComponent, ForumViewComponent],
  imports: [
    CommonModule,
    ForumRoutingModule,
    ForumStoreModule
  ]
})
export class ForumModule { }
