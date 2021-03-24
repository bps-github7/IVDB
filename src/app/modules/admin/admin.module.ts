import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponents, AdminRoutingModule } from './admin.routing';
import { CompositeModule } from '../composite/composite.module';



@NgModule({
  declarations: [
        AdminComponents
    ],
  imports: [
        CompositeModule,
        AdminRoutingModule,
    ]
})
export class AdminModule { }
