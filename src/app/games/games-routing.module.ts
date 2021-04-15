import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CategoriesComponent } from './categories/categories.component';
import { ConsolesComponent } from './consoles/consoles.component';
import { CreatorsComponent } from './creators/creators.component';
import { DisplayComponent } from './display/display.component';
import { GameInfoComponent } from './game-info/game-info.component';
import { GamesHomeComponent } from './games-home/games-home.component';
import { GamesComponent } from './games.component';
import { PlatformsComponent } from './platforms/platforms.component';

const routes: Routes = [
    {
        path: '', component: GamesComponent,
        children : [
            {
                path: '',
                component: GamesHomeComponent
            },
            {
                path: 'all',
                component: DisplayComponent
            },
            // TODO: condense this mess of routes into a single widget for browsing game info
            {
                path: 'info',
                component: GameInfoComponent
            },
            {
                path: 'info/categories',
                component: CategoriesComponent
            },
            {
                path: 'info/creators',
                component: CreatorsComponent
            },
            {
                path: 'info/platforms',
                component: PlatformsComponent
            },
            {
                path: 'info/console',
                component: ConsolesComponent
            },
            {
                path: 'info/categories/:category',
                component: CategoriesComponent
            },
            {
                path: 'info/creators/:creator',
                component: CreatorsComponent
            },
            {
                path: 'info/platforms/:platform',
                component: PlatformsComponent
            },
            {
                path: 'info/consoles/:console',
                component: ConsolesComponent
            }

        ]
    }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [
    RouterModule,
    SharedModule
  ]
})
export class GamesRoutingModule { } export const GamesComponents = [
    GamesComponent,
    DisplayComponent,
    GameInfoComponent,
    CategoriesComponent,
    CreatorsComponent,
    PlatformsComponent,
    ConsolesComponent
]
