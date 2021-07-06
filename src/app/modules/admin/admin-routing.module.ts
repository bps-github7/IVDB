import { AdminGameFormComponent } from './admin-game/admin-game-form/admin-game-form.component';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGameComponent } from './admin-game/admin-game.component';
import { AdminContentComponent } from './admin-content/admin-content.component';
import { AdminForumComponent } from './admin-forum/admin-forum.component';
import { AdminUserComponent } from './admin-user/admin-user.component';

const routes: Routes = [
	{ path: '', component: AdminComponent, children: [
		{ path: 'game/:id', component: AdminGameFormComponent },
		{ path: 'game/new', component: AdminGameFormComponent },
		{ path: 'game', component: AdminGameComponent },
		{ path: 'content', component: AdminContentComponent },
		{ path: 'forum', component: AdminForumComponent },
		{ path: 'user', component: AdminUserComponent }
	]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
