import { EffectsModule } from '@ngrx/effects';
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
import { StoreModule } from '@ngrx/store';
import { ContributionsReducer } from 'src/app/store/reducers/contributions.reducer';
import { ContributionEffects } from 'src/app/store/effects/contribution.effects';


@NgModule({
  declarations: [UserComponent, ProfileComponent, ProfileEditorComponent, UsersBrowserComponent, PreferencesEditorComponent, ContributionsDashboardComponent, AboutComponent],
  imports: [
    CommonModule,
		SharedModule,
		// TODO: 2 things
			// 1) make pluraling more consistent with contributions and preferences. starting to confuse yourself and sure its led to some hidden mistakes
				//2) make an index module for store related initialization rather than doing it in user.module (see admin.module & admin.index)

		StoreModule.forFeature('contributions', ContributionsReducer),
		EffectsModule.forFeature([ContributionEffects]),
    UserRoutingModule
  ]
})
export class UserModule { }
