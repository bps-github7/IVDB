import { NgModule } from '@angular/core';
import { AdminComponents, AdminRoutingModule } from './admin.routing';
import { CompositeModule } from '../composite/composite.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CommonModule } from '@angular/common/common';


@NgModule({
  declarations: [
        AdminComponents,
    ],
  imports: [
    CompositeModule,
    AdminRoutingModule,
    ]
})
export class AdminModule { }
