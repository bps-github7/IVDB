import { CommentSectionComponent } from './comment-section/comment-section.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ContribRoutingModule } from './contrib-routing';
import { SuggestionService } from '../services/suggestion.service';
import { ContribComponent } from './contrib.component';
import { ContribDashboardComponent } from './contrib-dashboard/contrib-dashboard.component';
import { ContributionsComponent } from './contributions/contributions.component';
import { EditContributionsComponent } from './edit-contributions/edit-contributions.component';
import { EditReviewComponent } from './edit-review/edit-review.component';
import { ProvideRatingComponent } from './provide-rating/provide-rating.component';
import { SuggestNewComponent } from './suggest-new/suggest-new.component';
import { ViewPostsComponent } from './view-posts/view-posts.component';
import { ViewRatingsComponent } from './view-ratings/view-ratings.component';
import { ViewReviewsComponent } from './view-reviews/view-reviews.component';



@NgModule({
  declarations: [
    ContribComponent,
    CommentSectionComponent,
    ContribDashboardComponent,
    ContributionsComponent,
    EditContributionsComponent,
    EditReviewComponent,
    ProvideRatingComponent,
    SuggestNewComponent,
    ViewPostsComponent,
    ViewRatingsComponent,
    ViewReviewsComponent


],
  imports: [
    CommonModule,
    SharedModule,
    ContribRoutingModule,
        
  ],
  providers: [
      SuggestionService
  ]
})
export class ContribModule { }
