import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/admin/dashboard/dashboard.component';
import { GamesComponent } from './modules/admin/games/games.component';
import { SignInComponent } from './modules/auth/sign-in/sign-in.component';
import { WelcomeComponent } from './modules/auth/welcome/welcome.component';
import { HomeComponent } from './modules/composite/home/home.component';

const routes: Routes = [
    { path : '', component: HomeComponent },
    { path : 'auth', component: WelcomeComponent,
        children: [
            { path : 'sign-in', component: SignInComponent}
        ]
    },
    // admin-dashboard is a better name.
    { path : 'admin', component: DashboardComponent,
        children: [
            //admin-games component is better name
            { path : 'games', component: GamesComponent}
        ]
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }