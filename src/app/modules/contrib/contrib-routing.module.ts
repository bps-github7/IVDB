import { RouterModule, Routes } from '@angular/router';
import { ContribComponent } from './contrib.component';


const routes: Routes = [
	{ path: '', component: ContribComponent
	// children: [
	// 		{
	// 				path: 'home',
	// 				component: ContribHomeComponent
	// 		},
	// 		{
	// 				path: 'edit',
	// 				component: EditContributionsComponent
	// 		},
	// 		{
	// 				path: 'suggest',
	// 				component: SuggestNewComponent
	// 		},
	// 		{
	// 				path: 'view',
	// 				component: ViewContribsComponent
	// 		},
	// 		{
	// 				path: 'view/:id',
	// 				component: ViewUserContribComponent
	// 		},
	// 		{
	// 				path: 'view/:id/posts',
	// 				component: ViewPostsComponent
	// 		},
	// 		{
	// 				path: 'view/:id/ratings',
	// 				component: ViewRatingsComponent
	// 		},
	// 		{
	// 				path: 'view/:id/reviews',
	// 				component: ViewReviewsComponent
	// 		},
			
	// ]
	 },
	
];
export const ContribRoutingModule = RouterModule.forChild(routes);
