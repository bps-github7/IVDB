import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesComponents, GamesRoutingModule } from './games-routing.module';


@NgModule({
  declarations: [GamesComponents],
  imports: [
    CommonModule,
    GamesRoutingModule
  ]
})
export class GamesModule { }
