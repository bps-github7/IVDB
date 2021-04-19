import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CreatePostComponent } from './create-post/create-post.component';
import { CreateThreadComponent } from './create-thread/create-thread.component';
import { ForumHomeComponent } from './forum-home/forum-home.component';
import { ForumComponent } from './forum.component';
import { ForumsListComponent } from './forums-list/forums-list.component';
import { ViewAllPostsComponent } from './view-all-posts/view-all-posts.component';
import { ViewForumComponent } from './view-forum/view-forum.component';
import { ViewThreadComponent } from './view-thread/view-thread.component';
  
const routes: Routes = [
  { path: '', component: ForumComponent,
    children: [
    {
        path: '',
        component: ForumHomeComponent
    },
    {
        path: 'all',
        component: ViewAllPostsComponent
    },
    {
        path: 'forums',
        component: ForumsListComponent
    },
    {
        path: ':forum-id',
        component: ViewForumComponent
    },
    {
        path: ':forum-id/:thread-id',
        component: ViewThreadComponent
    },
    {
        path: ':forum-id/new',
        component: CreateThreadComponent
    },

    // to edit an existing thread
    {
        path: ':forum-id/:thread-id/new',
        component: CreateThreadComponent
    },
    // create a post within a thread
    {
        path: ':forum-id/:thread-id/post/new',
        component: CreatePostComponent
    },
  ]
  },

];
 
@NgModule({
  imports: [
    SharedModule,  
    RouterModule.forChild(routes)],
  exports: [
    RouterModule,
    SharedModule
  ]
})
export class ForumRoutingModule { } export const ForumComponents = [
    CreatePostComponent,
    CreateThreadComponent,
    ForumsListComponent,
    ForumHomeComponent,
    ViewAllPostsComponent,
    ViewForumComponent,
    ViewThreadComponent,
    ForumComponent
]
 