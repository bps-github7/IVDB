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
// { path: 'games/:game_title/review', component: EditReviewComponent, canActivate: [AuthGuard] },



const routes: Routes = [
    { path: 'games', component: GamesComponent },
    { path: 'games/:id', component: ViewGameComponent },
    // where id refers to review-id
    { path: 'gaming-index', component: GamingIndexComponent },
    { path: 'gaming-index/creators/:creator', component: CreatorsComponent },
    { path: 'gaming-index/creators', component: CreatorsComponent },
    { path: 'gaming-index/categories/:category', component: CategoriesComponent },
    { path: 'gaming-index/categories', component: CategoriesComponent },
    { path: 'gaming-index/platforms/:platform_name/:console_name', component: ConsoleComponent },
    { path: 'gaming-index/platforms/:platform_name', component: PlatformsComponent },
    { path: 'gaming-index/platforms', component: PlatformsComponent },
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