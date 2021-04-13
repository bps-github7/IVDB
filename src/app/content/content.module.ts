import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponents, ContentRoutingModule } from './content-routing';



@NgModule({
  declarations: [ContentComponents],
  imports: [
    ContentRoutingModule,
    CommonModule
  ]
})
export class ContentModule { }
