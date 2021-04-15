import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesComponents, GamesRoutingModule } from './games-routing.module';
import { GamesHomeComponent } from './games-home/games-home.component';


@NgModule({
  declarations: [GamesComponents, GamesHomeComponent],
  imports: [
    CommonModule,
    GamesRoutingModule
  ]
})
export class GamesModule { }
