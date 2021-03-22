import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import { CategoriesComponent } from './categories/categories.component';
import { ConsoleComponent } from './console/console.component';
import { CreatorsComponent } from './creators/creators.component';
import { GamesComponent } from './games/games.component';
import { GamingIndexComponent } from './gaming-index/gaming-index.component';
import { PlatformsComponent } from './platforms/platforms.component';
import { ViewGameComponent } from './view-game/view-game.component';


/* BIG ASS NOTE: TODO this belongs in contributions but worried about the precendence with routes if its in someone
elses routing module but uses this modules routes to arrive there- */

//where id refers to review-id:
// { path: 'games/:game_title/review', component: EditReviewComponent, canActivate: [AuthGuard] },


const routes: Routes = [
    { path: 'games', component: GamesComponent },
    { path: 'games/:id', component: ViewGameComponent },
    
    /* need to change the routing url, and possibly whole ui of gaming index
    to just be games/info */
    { path: 'games/info', component: GamingIndexComponent },
    { path: 'games/info/creators/:creator', component: CreatorsComponent },
    { path: 'games/info/creators', component: CreatorsComponent },
    { path: 'games/info/categories/:category', component: CategoriesComponent },
    { path: 'games/info/categories', component: CategoriesComponent },
    { path: 'games/info/platforms/:platform_name/:console_name', component: ConsoleComponent },
    { path: 'games/info/platforms/:platform_name', component: PlatformsComponent },
    { path: 'games/info/platforms', component: PlatformsComponent },
];
@NgModule({ 
   imports: [RouterModule.forRoot(routes)], 
   exports: [RouterModule] 
})
export class GamesRoutingModule { } export const GamesComponents = [
    CategoriesComponent,
    ConsoleComponent,
    CreatorsComponent,
    GamesComponent,
    GamingIndexComponent,
    PlatformsComponent,
    ViewGameComponent
];