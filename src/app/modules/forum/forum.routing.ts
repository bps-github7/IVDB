import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
//this one prolly belongs in contributions!
import { CreatePostComponent } from './create-post/create-post.component';
import { CreateThreadComponent } from './create-thread/create-thread.component';
import { ForumComponent } from './forum.component';
import { ViewForumComponent } from './view-forum/view-forum.component';
import { ViewThreadComponent } from './view-thread/view-thread.component';

const routes: Routes = [
    { path: 'forum/:forum/thread/:thread/post/:id', component: CreatePostComponent },
    { path: 'forum/:forum/thread/:thread/post', component: CreatePostComponent },
    { path: 'forum/:forum/thread/edit/:id', component: CreateThreadComponent },
    { path: 'forum/:forum/thread/:thread', component: ViewThreadComponent },
    { path: 'forum/:forum/thread/edit', component: CreateThreadComponent },
    { path: 'forum/:forum', component: ViewForumComponent },
    { path: 'forum', component: ForumComponent },
    //how you edit a forum
    //TODO: need a second auth guard for preventing non author user from editing forums.
    // { path: 'forum/create-thread/:id', component: CreateThreadComponent, canActivate: [AuthGuard] },
    // { path: 'forum/create-thread', component: CreateThreadComponent, canActivate: [AuthGuard] },
    // { path: 'forum/my-posts/:id', component: ViewAllPostsComponent },
    

//    {path:"home", component:HomeComponent}, 
//    {path:"contactus", component:ContactusComponent} 
];
@NgModule({ 
   imports: [RouterModule.forRoot(routes)], 
   exports: [RouterModule] 
})
export class ForumRoutingModule { } export const ForumComponents = [
    CreatePostComponent,
    CreateThreadComponent,
    ForumComponent,
    ViewForumComponent,
    ViewThreadComponent   
];