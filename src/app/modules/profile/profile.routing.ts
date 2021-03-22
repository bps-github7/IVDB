import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 

const routes: Routes = [
    // routes for this module
 ];
@NgModule({ 
   imports: [RouterModule.forRoot(routes)], 
   exports: [RouterModule] 
})
export class ProfileRoutingModule { } export const ProfileComponents = [
    // components you want this module to expose
 ];