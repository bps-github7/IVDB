import { AuthGuardService } from './../shared/guards/auth-guard.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user.component';
import { ProfileEditorComponent } from './profile/profile-editor/profile-editor.component';
import { UserAuthGuardService } from '../shared/guards/user-auth-guard.service';
import { UsersBrowserComponent } from './users-browser/users-browser.component';
import { PreferencesEditorComponent } from './preferences-editor/preferences-editor.component';
import { ContributionsDashboardComponent } from './contributions-dashboard/contributions-dashboard.component';


// TODO: figure out where to apply the auth-guard 
const routes: Routes = [
	{path: '', component: UserComponent,
		children: [

			// Allows us to browse all users of site
			{ path : '', component : UsersBrowserComponent },
			
			{ path : 'new', component: ProfileEditorComponent, canActivate: [AuthGuardService, UserAuthGuardService]},
			{ path : ':displayName', component: ProfileComponent},
			{ path : ':displayName/profile/edit', component: ProfileEditorComponent, canActivate: [AuthGuardService, UserAuthGuardService]},
			{ path : ':displayName/preferences/edit', component: PreferencesEditorComponent, canActivate: [AuthGuardService, UserAuthGuardService]},
			{ path : ':displayName/contributions/dashboard', component: ContributionsDashboardComponent, canActivate: [AuthGuardService, UserAuthGuardService]},

		

		
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
