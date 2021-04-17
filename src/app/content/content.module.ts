import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentRoutingModule } from './content-routing';
import { ContentComponent } from './content.component';
import { ContentDashboardComponent } from './content-dashboard/content-dashboard.component';
import { NewsComponent } from './news/news.component';
import { ReccomendationsComponent } from './reccomendations/reccomendations.component';
import { RecentlyPostedComponent } from './recently-posted/recently-posted.component';
import { StreamingComponent } from './streaming/streaming.component';
import { ViewAllRatingsComponent } from './view-all-ratings/view-all-ratings.component';
import { ViewAllReviewsComponent } from './view-all-reviews/view-all-reviews.component';
import { WatchlistsComponent } from './watchlists/watchlists.component';
import { ContentHomeComponent } from './content-home/content-home.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ContentComponent,
    ContentDashboardComponent,
    WatchlistsComponent,
    NewsComponent,
    ReccomendationsComponent,
    RecentlyPostedComponent,
    StreamingComponent,
    ViewAllRatingsComponent,
    ViewAllReviewsComponent,
    ContentHomeComponent,

],
  imports: [
    ContentRoutingModule,
    CommonModule,
    SharedModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatCheckboxModule
  ]
})
export class ContentModule { }
