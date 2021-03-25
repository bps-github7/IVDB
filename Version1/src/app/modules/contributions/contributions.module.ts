import { NgModule } from '@angular/core';
import { CompositeModule } from '../composite/composite.module';
import { ContributionsComponents, ContributionsRoutingModule } from './contributions.routing';



@NgModule({
  declarations: [],
  imports: [
    ContributionsRoutingModule,
    ContributionsComponents,
    CompositeModule,
  ]
})
export class ContributionsModule { }
