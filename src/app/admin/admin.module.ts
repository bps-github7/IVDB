import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponents, AdminRoutingModule } from './admin-routing';




@NgModule({
  declarations: [AdminComponents],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})

export class AdminModule { }
