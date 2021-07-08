import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// helper modules for forum module
import { ForumRoutingModule } from './forum-routing.module';
import { ForumStoreModule } from './forum.index';
import { SharedModule } from '../shared/shared.module';

// components declared in forum module
import { ForumComponent } from './forum.component';
import { ForumBrowserComponent } from './forum-browser/forum-browser.component';
import { ForumViewComponent } from './forum-view/forum-view.component';
import { ForumListComponent } from './forum-browser/forum-list/forum-list.component';


@NgModule({
  declarations: [
		ForumComponent, 
		ForumBrowserComponent, 
		ForumViewComponent, 
		ForumListComponent
	],
  imports: [
    CommonModule,
		SharedModule,
    ForumRoutingModule,
    ForumStoreModule
  ]
})
export class ForumModule { }
