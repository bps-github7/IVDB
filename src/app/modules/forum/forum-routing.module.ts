import { ForumComponent } from './forum.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForumBrowserComponent } from './forum-browser/forum-browser.component';
import { ForumViewComponent } from './forum-view/forum-view.component';

const routes: Routes = [
	{path: '', component: ForumComponent,
		children: [
			{ path: '', component: ForumBrowserComponent },
			{ path: ':forumId', component: ForumViewComponent }
			// perhaps this can be a redirect?
			// { path: 'help/new', component: ForumSubmitHelpAndSupportThreadCompoinent }
		]

}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForumRoutingModule { }
