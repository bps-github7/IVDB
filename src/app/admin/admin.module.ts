import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponents, AdminRoutingModule } from './admin-routing';
import { SharedModule } from '../shared/shared.module';
import { PostComponent } from './forms/post/post.component';




@NgModule({
  declarations: [AdminComponents, PostComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
]
})

export class AdminModule { }
