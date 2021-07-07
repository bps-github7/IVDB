import { GamesComponent } from './games.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { SharedModule } from '../shared/shared.module';
import { GameViewComponent } from './game-view/game-view.component';
import { GameBrowserComponent } from './game-browser/game-browser.component';
import { GameStoreModule } from './games.index';

@NgModule({
  declarations: [GamesComponent, GameViewComponent, GameBrowserComponent],
  imports: [
    CommonModule,
    GamesRoutingModule,
		GameStoreModule,
    SharedModule
  ]
})
export class GamesModule { }
