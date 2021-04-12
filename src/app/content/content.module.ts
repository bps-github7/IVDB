import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ContentComponents, ContentRoutingModule } from './content.router';



@NgModule({
  declarations: [ContentComponents],
  imports: [
    SharedModule,
    ContentRoutingModule,
    CommonModule
  ]
})
export class ContentModule { }
