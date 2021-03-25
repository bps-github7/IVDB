import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GamesComponent } from './games/games.component';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [DashboardComponent, GamesComponent],
  imports: [
    AdminRoutingModule,
    CommonModule
  ],
  exports : [
  ]
})
export class AdminModule { }
