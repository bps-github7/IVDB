import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
// import { AccountSettingsComponent } from './account-settings/account-settings.component';
// import { ChangePasswordComponent } from './change-password/change-password.component';

// import { CreateAccountComponent } from './create-account/create-account.component';

// import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
    // { path: 'createAccount/forgotPassword', component: ForgotPasswordComponent },
    // { path: 'createAccount', component: CreateAccountComponent },
    // { path: 'settings', component: AccountSettingsComponent },
    { path: '', component: WelcomeComponent },
    
    { path: 'sign-in', component: SignInComponent },

     
];
@NgModule({ 
   imports: [RouterModule.forChild(routes)], 
   exports: [RouterModule] 
})
export class AuthRoutingModule { } export const AuthComponents = [
    // this first one belongs in reactive-forums-module when u make it.
    // AccountSettingsComponent,
    // ChangePasswordComponent,
    // SignInComponent,
    // CreateAccountComponent,
    // ForgotPasswordComponent,  
    // WelcomeComponent,
    SignInComponent,
    WelcomeComponent
];