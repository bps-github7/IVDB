import { CrudHubComponent } from './crud-hub/crud-hub.component';
import { ContentBrowserComponent } from './content-browser/content-browser.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ContentComponent } from './content.component';
import { ContentViewComponent } from './content-view/content-view.component';
const routes: Routes = [
	{ path: '', component: ContentComponent,
	children: [
			{
					path: '',
					component: CrudHubComponent
					// component: ContentBrowserComponent 
			},
			{
				path: ':id',
				component: ContentViewComponent 
			},
			// {
			// 		path: 'watchlists',
			// 		component: WatchlistsComponent
			// },
			// {
			// 		path: 'streams',
			// 		component: StreamingComponent
			// },
			// {
			// 		path: 'news',
			// 		component: NewsComponent
			// },
			// {
			// 		path: 'reccomendations',
			// 		component: ReccomendationsComponent
			// },
			// {
			// 		path: 'recently-posted',
			// 		component: RecentlyPostedComponent
			// },
			// {
			// 		path: 'view/ratings',
			// 		component: ViewAllRatingsComponent
			// },
			// {
			// 		path: 'view/reviews',
			// 		component: ViewAllReviewsComponent
			// },
	]
	},
	
];

@NgModule({
imports: [
	SharedModule,  
	RouterModule.forChild(routes)],
exports: [
	RouterModule,
	SharedModule,
]
})
export class ContentRoutingModule { }
