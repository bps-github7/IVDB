import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ForumComponents, ForumRoutingModule } from './forum-routing';



@NgModule({
  declarations: [ForumComponents],
  imports: [
    CommonModule,
    SharedModule,
    ForumRoutingModule
    
  ]
})
export class ForumModule { }
