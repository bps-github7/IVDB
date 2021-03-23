import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 

const routes: Routes = [
    // { path: 'forum/:forum/thread/:thread/post/:id', component: CreatePostComponent },

    { path: 'ratings/:username', component: ViewRatingsComponent, canActivate: [AuthGuard] },
    { path: 'reviews/:username/:game_title', component: DisplayReviewComponent, canActivate: [AuthGuard] },
    { path: 'reviews/:username', component: ViewReviewsComponent, canActivate: [AuthGuard] },
    { path: ':username', component: ContribDashboardComponent, canActivate: [AuthGuard] },


];
@NgModule({ 
   imports: [RouterModule.forRoot(routes)], 
   exports: [RouterModule] 
})
export class ContributionsRoutingModule { } export const ContributionsComponents = [
    //Components you want this module to explose
];