import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileEditorComponent } from './profile/profile-editor/profile-editor.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [UserComponent, ProfileComponent, ProfileEditorComponent],
  imports: [
    CommonModule,
		SharedModule,
    UserRoutingModule
  ]
})
export class UserModule { }
