import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import { AuthGuard } from 'src/app/common/services/auth-guard.service';
import { DisplayReviewComponent } from '../composite/display/display-review/display-review.component';
import { ContribDashboardComponent } from './contrib-dashboard/contrib-dashboard.component';
import { ContributionsComponent } from './contributions/contributions.component';
import { EditReviewComponent } from './edit-review/edit-review.component';
import { SuggestNewComponent } from './suggest-new/suggest-new.component';
import { ViewPostsComponent } from './view-posts/view-posts.component';
import { ViewRatingsComponent } from './view-ratings/view-ratings.component';
import { ViewReviewsComponent } from './view-reviews/view-reviews.component';

const routes: Routes = [ 
    { path : ':username/reviews/:game-title', component: DisplayReviewComponent, canActivate: [AuthGuard]},
    
    { path : ':username/reviews/new', component:  EditReviewComponent, canActivate: [AuthGuard]},
    { path : ':username/reviews/edit', component: EditReviewComponent, canActivate: [AuthGuard]},
    
    { path : ':username/contributions', component:  ContributionsComponent, canActivate: [AuthGuard]},
    { path : ':username/contributions/ratings', component:  ViewRatingsComponent, canActivate: [AuthGuard]},
    { path : ':username/contributions/reviews', component:  ViewReviewsComponent, canActivate: [AuthGuard]},
    { path : ':username/contributions/posts', component:  ViewPostsComponent, canActivate: [AuthGuard]},
    
    { path : 'suggest', component:  SuggestNewComponent, canActivate: [AuthGuard]},
    
    { path : '', component:  ContribDashboardComponent, canActivate: [AuthGuard]},
    
    
        //TODO: finish routes above.

];
@NgModule({ 
   imports: [RouterModule.forChild(routes)], 
   exports: [RouterModule] 
})
/* TODO: figure out- should we export every component in module here? or just the ones routing needs? probably the later
no need exposing/ making things public  */
export class ContributionsRoutingModule { } 
    export const ContributionsComponents = [
        ContribDashboardComponent,
        ContributionsComponent,
        EditReviewComponent,
        SuggestNewComponent,
        ViewPostsComponent,
        ViewRatingsComponent,
        ViewReviewsComponent

    ]