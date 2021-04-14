import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { HomeComponent } from './core/home/home.component';
import { NotFoundComponent } from './core/not-found/not-found.component';

import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';
 
 
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
          loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
        },
        { 
          path: 'user',
          loadChildren: () => import('./user/user.module').then(m => m.UserModule)
        },
        { 
          path: 'games',
          loadChildren: () => import('./games/games.module').then(m => m.GamesModule)
        },
        { 
          path: 'game',
          loadChildren: () => import('./game/game.module').then(m => m.GameModule)
        },
        { 
          path: 'forum',
          loadChildren: () => import('./forum/forum.module').then(m => m.ForumModule)
        },
        { 
          path: 'content',
          loadChildren: () => import('./content/content.module').then(m => m.ContentModule)
        },
        { 
          path: 'contrib',
          loadChildren: () => import('./contrib/contrib.module').then(m => m.ContribModule)
        },
        { path: '**', component: NotFoundComponent }
    ]
 
@NgModule({
  imports: [SharedModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }