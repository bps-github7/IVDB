import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import { UserAuthGuard } from 'src/app/common/services/user-auth-guard.service';
import { ViewAllReviewsComponent } from '../content/view-all-reviews/view-all-reviews.component';
import { BrowseProfilesComponent } from './browse-profiles/browse-profiles.component';
import { ContributionsComponent } from './contributions-components/contributions/contributions.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';


const routes: Routes = [
    { path : '', component:  BrowseProfilesComponent},
    { path : ':username', component:  ViewProfileComponent},
    { path : ':username/new', component:  EditProfileComponent, canActivate : []},
    { path : ':username/edit', component:  EditProfileComponent, canActivate: []},
    { path : ':username/preferences', component:  PreferencesComponent, canActivate: []},
    { path : ':username/contributions', component:  ContributionsComponent, canActivate: []},
    { path : ':username/reviews', component:  ViewAllReviewsComponent, canActivate: []},
    // { path : ':username/reviews/new', component:  , canActivate: []},
    // { path : ':username/reviews/edit', component: , canActivate: []},

    // still need a lot of kinks wourked out with tis refactoring  of routes.
    // we combined the contrib and dporofile, because contrib offers similar
    // vieews to those in Profile.





 ];
@NgModule({ 
   imports: [RouterModule.forRoot(routes)], 
   exports: [RouterModule] 
})
export class ProfileRoutingModule { } export const ProfileComponents = [
    // components you want this module to expose
 ];