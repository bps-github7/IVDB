import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ForumComponents, ForumRoutingModule } from './forum-routing';
import { ForumHomeComponent } from './forum-home/forum-home.component';



@NgModule({
  declarations: [ForumComponents, ForumHomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    ForumRoutingModule
    
  ]
})
export class ForumModule { }
