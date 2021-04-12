import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CommentSectionComponent } from './comment-section/comment-section.component';
import { ContribDashboardComponent } from './contrib-dashboard/contrib-dashboard.component';
import { ContribComponent } from './contrib.component';
import { ContributionsComponent } from './contributions/contributions.component';
import { EditContributionsComponent } from './edit-contributions/edit-contributions.component';
import { EditReviewComponent } from './edit-review/edit-review.component';
import { ProvideRatingComponent } from './provide-rating/provide-rating.component';
import { SuggestNewComponent } from './suggest-new/suggest-new.component';
import { ViewPostsComponent } from './view-posts/view-posts.component';
import { ViewRatingsComponent } from './view-ratings/view-ratings.component';
import { ViewReviewsComponent } from './view-reviews/view-reviews.component';
  
const routes: Routes = [
    { path: '', component: ContribComponent,
    children: [
        {
            path: 'edit',
            component: EditContributionsComponent
        },
        {
            path: 'suggest',
            component: SuggestNewComponent
        },
        {
            path: 'view',
            component: ContributionsComponent
        },
        {
            path: 'view/posts',
            component: ViewPostsComponent
        },
        {
            path: 'view/ratings',
            component: ViewRatingsComponent
        },
        {
            path: 'view/reviews',
            component: ViewReviewsComponent
        },
        
    ]
    },
    
];
 
@NgModule({
  imports: [
    SharedModule,  
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContribRoutingModule { } export const ContribComponents = [
    ContribComponent,
    ContribDashboardComponent,
    CommentSectionComponent,
    ContributionsComponent,
    EditContributionsComponent,
    EditReviewComponent,
    ProvideRatingComponent,
    SuggestNewComponent,
    ViewPostsComponent,
    ViewRatingsComponent,
    ViewReviewsComponent    
]
 