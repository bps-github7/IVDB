import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewUserContribComponent } from './view-user-contrib/view-user-contrib.component';
import { ContribDashboardComponent } from './contrib-dashboard/contrib-dashboard.component';
import { ContribComponent } from './contrib.component';
import { EditContributionsComponent } from './edit-contributions/edit-contributions.component';
import { SuggestNewComponent } from './suggest-new/suggest-new.component';
import { ViewPostsComponent } from './view-posts/view-posts.component';
import { ViewRatingsComponent } from './view-ratings/view-ratings.component';
import { ViewReviewsComponent } from './view-reviews/view-reviews.component';
import { ContribHomeComponent } from './contrib-home/contrib-home.component';
import { ViewContribsComponent } from './view-contribs/view-contribs.component';
  
const routes: Routes = [
    { path: '', component: ContribComponent,
    children: [
        {
            path: '',
            component: ContribHomeComponent
        },
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
            component: ViewContribsComponent
        },
        {
            path: 'view/:id',
            component: ViewUserContribComponent
        },
        {
            path: 'view/:id/posts',
            component: ViewPostsComponent
        },
        {
            path: 'view/:id/ratings',
            component: ViewRatingsComponent
        },
        {
            path: 'view/:id/reviews',
            component: ViewReviewsComponent
        },
        
    ]
    },
    
];
export const ContribRoutingModule = RouterModule.forChild(routes);
 