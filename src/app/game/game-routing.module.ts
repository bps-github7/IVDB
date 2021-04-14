import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { DisplayAverageRatingComponent } from './display-average-rating/display-average-rating.component';
import { DisplayRatingComponent } from './display-rating/display-rating.component';
import { DisplayReviewComponent } from './display-review/display-review.component';
import { GameCardComponent } from './game-card/game-card.component';
import { GameComponent } from './game.component';
import { ViewGameComponent } from './view-game/view-game.component';

const routes: Routes = [
    { path: '', component: GameComponent,
      children: [
        {
            path: ':id',
            component: ViewGameComponent
        },

        // design TODO: should we move provide-review to here?
        //route would be: 'game/:id/review/new' | 'game/:id/review/edit'
        {
            path: ':id/review/:display-name',
            component: DisplayReviewComponent
        }
      ]

    }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)],
  exports: [
    SharedModule,
    RouterModule
  ]
})
export class GameRoutingModule { } export const GameComponents = [
    DisplayAverageRatingComponent,
    DisplayRatingComponent,
    DisplayReviewComponent,
    GameCardComponent,
    ViewGameComponent,
    GameComponent
]
