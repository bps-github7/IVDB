import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GamesComponent } from './games/games.component';

const routes: Routes = [
    // admin-dashboard is a better name.
    { path : 'admin', component: DashboardComponent,
        children: [
            //admin-games component is better name
            { path : 'games', component: GamesComponent}
        ]
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
