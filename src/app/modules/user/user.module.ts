import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileEditorComponent } from './profile/profile-editor/profile-editor.component';
import { SharedModule } from '../shared/shared.module';
import { UsersBrowserComponent } from './users-browser/users-browser.component';
import { PreferencesEditorComponent } from './preferences-editor/preferences-editor.component';
import { ContributionsDashboardComponent } from './contributions-dashboard/contributions-dashboard.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [UserComponent, ProfileComponent, ProfileEditorComponent, UsersBrowserComponent, PreferencesEditorComponent, ContributionsDashboardComponent, AboutComponent],
  imports: [
    CommonModule,
		SharedModule,
    UserRoutingModule
  ]
})
export class UserModule { }
