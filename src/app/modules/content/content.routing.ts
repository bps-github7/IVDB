import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import { ViewAllPostsComponent } from './view-all-posts/view-all-posts.component';
import { ContentDashboardComponent } from './content-dashboard/content-dashboard.component';
import { NewsComponent } from './news/news.component';
import { ReccomendationsComponent } from './reccomendations/reccomendations.component';
import { RecentlyPostedComponent } from './recently-posted/recently-posted.component';
import { StreamingComponent } from './streaming/streaming.component';
import { WatchlistsComponent } from './watchlists/watchlists.component';
import { ViewAllRatingsComponent } from './view-all-ratings/view-all-ratings.component';
import { ViewAllReviewsComponent } from './view-all-reviews/view-all-reviews.component';

const routes: Routes = [
    
    // seems that this one is criss cropssed with contributions
    { path: 'watchlists', component: WatchlistsComponent },
    { path: 'streams', component: StreamingComponent },
    { path: 'news', component: NewsComponent },
    { path: 'recently-posted', component: RecentlyPostedComponent },
    { path: 'recently-posted/ratings', component: ViewAllRatingsComponent },
    { path: 'recently-posted/reviews', component: ViewAllReviewsComponent },
    { path: 'recently-posted/posts', component: ViewAllPostsComponent },
    { path: '', component: ContentDashboardComponent },
  // recommendation DEf belongs here, but its not in the routes!  
    
     
];
@NgModule({ 
   imports: [RouterModule.forRoot(routes)], 
   exports: [RouterModule] 
})
export class ContentRoutingModule { } export const ContentComponents = [
    WatchlistsComponent,
    StreamingComponent,
    NewsComponent,
    RecentlyPostedComponent,
    ViewAllRatingsComponent,
    ViewAllReviewsComponent,
    ViewAllPostsComponent, /// ???? for forums!?
    ContentDashboardComponent,
    ReccomendationsComponent,
];