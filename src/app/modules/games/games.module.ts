import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponents, GamesRoutingModule } from './games.routing';
import { CompositeModule } from '../composite/composite.module';



@NgModule({
  declarations: [GamesComponents],
  imports: [
    GamesRoutingModule,
    CompositeModule
  ]
})
export class GamesModule { }
