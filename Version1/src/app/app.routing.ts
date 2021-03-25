import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import { AdminDashboardComponent } from './modules/admin/admin-dashboard/admin-dashboard.component';
import { SignInComponent } from './modules/auth/sign-in/sign-in.component';
import { WelcomeComponent } from './modules/auth/welcome/welcome.component';
import { HomeComponent } from './modules/composite/misc/home/home.component';
import { NotFoundComponent } from './modules/composite/misc/not-found/not-found.component';
import { SearchComponent } from './modules/composite/misc/search/search.component';


const routes: Routes = [ 
    //routes asscesible to annoymous users
    //temporarily swapped this for learning css. conveninece.
    { path: '', component: HomeComponent },
    { path: 'auth', component: WelcomeComponent,
        children: [
            { path: 'sign-in', component: SignInComponent}
        ]
    },
    { path : 'admin', component: AdminDashboardComponent},
    // { path: 'auth', redirectTo: '/auth', pathMatch: 'full'},
    // { path: 'content', redirectTo: '/content', pathMatch: 'full'},
    // { path: 'contributions', redirectTo: '/contributions', pathMatch: 'full'},
    // { path: 'games', redirectTo: '/games', pathMatch: 'full'},
    // { path: 'admin', redirectTo: '/admin', pathMatch: 'full'},
    // { path: 'forum', redirectTo: '/forum', pathMatch: 'full'},
    // { path: 'profile', redirectTo: '/profile', pathMatch: 'full'},
    { path: 'search', component: SearchComponent },
    { path: '**', component: NotFoundComponent }

    
];
@NgModule({ 
   imports: [RouterModule.forRoot(routes,
    {enableTracing : true}),
], 
   exports: [RouterModule] 
})

export class AppRoutingModule { }