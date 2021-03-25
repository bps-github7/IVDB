import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import { AuthGuard } from 'src/app/common/services/auth-guard.service';
import { UserAuthGuard } from 'src/app/common/services/user-auth-guard.service';
import { ViewAllReviewsComponent } from '../content/view-all-reviews/view-all-reviews.component';
import { BrowseProfilesComponent } from './browse-profiles/browse-profiles.component';
import { ContribDashboardComponent } from '../contributions/contrib-dashboard/contrib-dashboard.component';
import { EditContributionsComponent } from './edit-contributions/edit-contributions.component';
import { EditPreferencesComponent } from './edit-preferences/edit-preferences.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';


const routes: Routes = [

    // TODO: you should organize each modules components into helpers and single page components
    // so we know which components need routing to them.

    { path : ':username/preferences', component:  PreferencesComponent, canActivate: [AuthGuard]},
    { path : ':username/contribs', component:  ContribDashboardComponent, canActivate: [AuthGuard]},
    { path : ':username/reviews', component:  ViewAllReviewsComponent, canActivate: [AuthGuard]},
    { path : ':username/edit', component:  EditProfileComponent, canActivate: [AuthGuard]},
    { path : ':username/new', component:  EditProfileComponent, canActivate : [AuthGuard]},
    { path : ':username', component:  ViewProfileComponent},
    { path : '', component:  BrowseProfilesComponent},
    
    // TODO: Lots of kinks from combining contribution modules' components w profile
    // still need to get worked out for routing to be good good.
 ];
@NgModule({ 
   imports: [RouterModule.forChild(routes)], 
   exports: [RouterModule] 
})
export class ProfileRoutingModule { } export const ProfileComponents = [
    ContribDashboardComponent,
    EditContributionsComponent,
    EditPreferencesComponent,
    EditProfileComponent,
    PreferencesComponent,
    ViewProfileComponent,
    BrowseProfilesComponent,
];