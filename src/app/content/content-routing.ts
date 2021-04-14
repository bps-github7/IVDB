import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ContentDashboardComponent } from './content-dashboard/content-dashboard.component';
import { ReccomendationsComponent } from './reccomendations/reccomendations.component';
import { RecentlyPostedComponent } from './recently-posted/recently-posted.component';
import { StreamingComponent } from './streaming/streaming.component';
import { ViewAllRatingsComponent } from './view-all-ratings/view-all-ratings.component';
import { ViewAllReviewsComponent } from './view-all-reviews/view-all-reviews.component';
import { NewsComponent } from './news/news.component';
import { WatchlistsComponent } from './watchlists/watchlists.component';
import { ContentComponent } from './content.component';
 
 
const routes: Routes = [
    { path: '', component: ContentComponent,
    children: [
        {
            path: 'watchlists',
            component: WatchlistsComponent
        },
        {
            path: 'streaming',
            component: StreamingComponent
        },
        {
            path: 'news',
            component: NewsComponent
        },
        {
            path: 'reccomendations',
            component: ReccomendationsComponent
        },
        {
            path: 'recent',
            component: RecentlyPostedComponent
        },
        {
            path: 'view/ratings',
            component: ViewAllRatingsComponent
        },
        {
            path: 'view/reviews',
            component: ViewAllReviewsComponent
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
export class ContentRoutingModule { }
 