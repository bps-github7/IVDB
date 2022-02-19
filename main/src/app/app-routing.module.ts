import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SharedModule } from './modules/shared/shared.module';
 
 
const routes: Routes = [
        {
            path: '',
            component: HomeComponent
        },
        {
            path: 'home',
            component: HomeComponent
        },
        { 
          path: 'admin',
          loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
        },
        { 
          path: 'user',
          loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)
        },
        { 
          path: 'games',
          loadChildren: () => import('./modules/games/games.module').then(m => m.GamesModule)
        },
        { 
          path: 'forum',
          loadChildren: () => import('./modules/forum/forum.module').then(m => m.ForumModule)
        },
        { 
          path: 'content',
          loadChildren: () => import('./modules/content/content.module').then(m => m.ContentModule)
        },
        // Debating if we really need this module
				{ 
          path: 'contrib',
          loadChildren: () => import('./modules/contrib/contrib.module').then(m => m.ContribModule)
        },
				{
					path: 'auth',
					loadChildren : () => import('./components/auth/auth.module').then(m => m.AuthModule)
				},
				{ path: '**', component: NotFoundComponent }
    ]
 
@NgModule({
  imports: [SharedModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }