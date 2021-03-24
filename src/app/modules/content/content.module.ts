import { NgModule } from '@angular/core';
import { ContentComponents, ContentRoutingModule } from './content.routing';
import { CompositeModule } from '../composite/composite.module';



@NgModule({
  declarations: [ContentComponents],
  imports: [
    ContentRoutingModule,
    CompositeModule
  ]
})
export class ContentModule { }
