import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import { CategoriesComponent } from './categories/categories.component';
import { ConsoleComponent } from './console/console.component';
import { CreatorsComponent } from './creators/creators.component';
import { GamesComponent } from './games/games.component';
import { GamingIndexComponent } from './gaming-index/gaming-index.component';
import { PlatformsComponent } from './platforms/platforms.component';
import { ViewGameComponent } from './view-game/view-game.component';


/* TODO: untangle contributions from profile. some relevancy to here, where game title
will have to be part of the url for the creating, viewing and editing of a review (but not rating). */


// TODO: should just be able to browse consoles like games 

const routes: Routes = [
    { path: '', component: GamesComponent },
    { path: ':id', component: ViewGameComponent },
    { path: 'info', component: GamingIndexComponent },
    { path: 'info/creators/:creator', component: CreatorsComponent },
    { path: 'info/creators', component: CreatorsComponent },
    { path: 'info/categories/:category', component: CategoriesComponent },
    { path: 'info/categories', component: CategoriesComponent },
    { path: 'info/platforms/:platform_name/:console_name', component: ConsoleComponent },
    { path: 'info/platforms/:platform_name', component: PlatformsComponent },
    { path: 'info/platforms', component: PlatformsComponent },
];
@NgModule({ 
   imports: [RouterModule.forChild(routes)], 
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