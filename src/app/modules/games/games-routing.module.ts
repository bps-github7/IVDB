import { GameInfoPanelComponent } from './game-info-panel/game-info-panel.component';
import { GameBrowserComponent } from './game-browser/game-browser.component';
import { GamesComponent } from './games.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameViewComponent } from './game-view/game-view.component';

const routes: Routes = [
	{path: '',component: GamesComponent,
		children: [
			{ path: '', component: GameBrowserComponent },
			{ path: 'info', component: GameInfoPanelComponent },
			// { path: ':gameId', component: GameViewComponent }
			{ path: ':gameTitle', component: GameViewComponent }

			// { path: 'game/:id', component: AdminGameFormComponent },
			// { path: 'forum/:id', component: AdminForumFormComponent },
			// { path: 'game/new', component: AdminGameFormComponent },
			// { path: 'forum/new', component: AdminForumFormComponent },
			// { path: 'game', component: AdminGameComponent },
			// { path: 'content', component: AdminContentComponent },
			// { path: 'forum', component: AdminForumComponent },
			// { path: 'user', component: AdminUserComponent }
		]
	}
	
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
