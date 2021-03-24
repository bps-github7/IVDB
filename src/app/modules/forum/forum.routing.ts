import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
//this one prolly belongs in contributions!
import { CreatePostComponent } from './create-post/create-post.component';
import { CreateThreadComponent } from './create-thread/create-thread.component';
import { ForumComponent } from './forum.component';
import { ViewForumComponent } from './view-forum/view-forum.component';
import { ViewThreadComponent } from './view-thread/view-thread.component';

const routes: Routes = [    
    { path: ':forum_id/:thread_id/edit', component : CreatePostComponent},
    { path: ':forum_id/:thread_id/new', component : CreatePostComponent},
    { path: ':forum_id/:thread_id', component : ViewThreadComponent},
    { path: ':forum_id/edit', component: CreateThreadComponent },    
    { path: ':forum_id/new', component: CreateThreadComponent },    
    { path: ':forum_id', component: ViewForumComponent },    
    { path: '', component: ForumComponent },  
];
@NgModule({ 
   imports: [RouterModule.forRoot(routes)], 
   exports: [RouterModule] 
})
export class ForumRoutingModule { } export const ForumComponents = [
    ForumComponent,
    ViewForumComponent,
    CreatePostComponent,
    CreateThreadComponent,
    ViewThreadComponent   
];