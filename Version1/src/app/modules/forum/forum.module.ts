import { NgModule } from '@angular/core';
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
