import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 

const routes: Routes = [ 
    { path : ':username/reviews/new', component:  EditReviewComponent, canActivate: [AuthGuard]},
    { path : ':username/reviews/edit', component: EditReviewComponent, canActivate: [AuthGuard]},
    { path : ':username/contributions', component:  ContributionsComponent, canActivate: [AuthGuard]},

];
@NgModule({ 
   imports: [RouterModule.forChild(routes)], 
   exports: [RouterModule] 
})
/* TODO: figure out- should we export every component in module here? or just the ones routing needs? probably the later
no need exposing/ making things public  */
export class ContributionsRoutingModule { } 
    export const ContributionsComponents = [
        ContribDashboardComponent,
        ContributionsComponents,
        //TODO: finish this contribComponents array and routes above.

    ]