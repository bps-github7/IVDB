import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForumComponents, ForumRoutingModule } from './forum.routing';
import { CompositeModule } from '../composite/composite.module';



@NgModule({
  declarations: [ForumComponents],
  imports: [
    CompositeModule,
    ForumRoutingModule
  ]
})
export class ForumModule { }
