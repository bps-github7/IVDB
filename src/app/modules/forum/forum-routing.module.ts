import { ForumComponent } from './forum.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForumBrowserComponent } from './forum-browser/forum-browser.component';
import { ForumViewComponent } from './forum-view/forum-view.component';

const routes: Routes = [
	{path: '', component: ForumComponent,
		children: [
			{ path: 'all', component: ForumBrowserComponent },
			{ path: ':id', component: ForumViewComponent }
		]

}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForumRoutingModule { }
