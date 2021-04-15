import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { UserComponent } from './user.component';
import { EditPreferencesComponent } from './edit-preferences/edit-preferences.component';
import { SharedModule } from '../shared/shared.module';
import { InfoComponent } from './info/info.component';


@NgModule({
  declarations: [
    UserComponent,
    WelcomeComponent,
    SignInComponent,
    CreateAccountComponent,
    ChangePasswordComponent,
    ForgotPasswordComponent,
    ViewProfileComponent,
    EditProfileComponent,
    EditPreferencesComponent,
    InfoComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
