import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponents, AdminRoutingModule } from './admin.routing';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [AdminComponents],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule
  ]
})

export class AdminModule { }
