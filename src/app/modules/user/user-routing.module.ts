import { AuthGuardService } from './../shared/guards/auth-guard.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user.component';
import { ProfileEditorComponent } from './profile/profile-editor/profile-editor.component';
import { UserAuthGuardService } from '../shared/guards/user-auth-guard.service';


// TODO: figure out where to apply the auth-guard 
const routes: Routes = [
	{path: '', component: UserComponent,
		children: [
			{path : 'profile/:displayName/edit', component: ProfileEditorComponent, canActivate: [AuthGuardService, UserAuthGuardService]},


			{path : 'profile/new', component: ProfileEditorComponent, canActivate: [AuthGuardService, UserAuthGuardService]},

			{path : 'profile/:displayName', component: ProfileComponent}
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
