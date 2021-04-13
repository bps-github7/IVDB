import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CreatePostComponent } from './create-post/create-post.component';
import { CreateThreadComponent } from './create-thread/create-thread.component';
import { ForumComponent } from './forum.component';
import { ForumsListComponent } from './forums-list/forums-list.component';
import { HomeComponent } from './home/home.component';
import { ViewAllPostsComponent } from './view-all-posts/view-all-posts.component';
import { ViewForumComponent } from './view-forum/view-forum.component';
import { ViewThreadComponent } from './view-thread/view-thread.component';
  
const routes: Routes = [
    { path: '', component: ForumComponent,
    children: [
        {
            path: 'home',
            component: HomeComponent
        },
        {
            path: 'all',
            component: ViewAllPostsComponent
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
            path: ':forum-id/:thread-id',
            component: CreateThreadComponent
        },
        // create a post within a thread
        {
            path: ':forum-id/:thread-id/new',
            component: CreatePostComponent
        },
        // for editing a post- NOTE: we could accomplush this in the view thread component
        // with event listeners
        // very illedible/ non user friendly/ not se optimized route! but it works (for now)!
        {
            path: ':forum-id/:thread-id/:post-id',
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
    HomeComponent,
    ViewAllPostsComponent,
    ViewForumComponent,
    ViewThreadComponent,
    ForumComponent
]
 