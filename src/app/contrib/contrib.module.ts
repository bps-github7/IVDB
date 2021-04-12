import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ContribRoutingModule, ContribComponents } from './contrib.routing';
import { SuggestionService } from '../common/services/suggestion.service';



@NgModule({
  declarations: [ContribComponents],
  imports: [
    CommonModule,
    SharedModule,
    ContribRoutingModule,
        
  ],
  providers: [
      SuggestionService
  ]
})
export class ContribModule { }
