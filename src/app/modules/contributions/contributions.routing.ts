import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import { AuthGuard } from 'src/app/common/services/auth-guard.service';
import { ContribDashboardComponent } from './contrib-dashboard/contrib-dashboard.component';
import { ContributionsComponent } from './contributions/contributions.component';
import { DisplayAverageRatingComponent } from './display-average-rating/display-average-rating.component';
import { DisplayRatingComponent } from './display-rating/display-rating.component';
import { DisplayReviewComponent } from './display-review/display-review.component';
import { EditReviewComponent } from './edit-review/edit-review.component';
import { SuggestNewComponent } from './suggest-new/suggest-new.component';
import { ViewPostsComponent } from './view-posts/view-posts.component';
import { ViewRatingsComponent } from './view-ratings/view-ratings.component';
import { ViewReviewsComponent } from './view-reviews/view-reviews.component';

const routes: Routes = [ 
    { path : ':username/reviews/new', component:  EditReviewComponent, canActivate: [AuthGuard]},
    { path : ':username/reviews/edit', component: EditReviewComponent, canActivate: [AuthGuard]},
    { path : ':username/contributions', component:  ContributionsComponent, canActivate: [AuthGuard]},
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
        DisplayAverageRatingComponent,
        DisplayRatingComponent,
        DisplayReviewComponent,
        EditReviewComponent,
        SuggestNewComponent,
        ViewPostsComponent,
        ViewRatingsComponent,
        ViewReviewsComponent

    ]