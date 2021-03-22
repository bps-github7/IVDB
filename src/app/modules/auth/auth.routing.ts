import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 

import { AuthGuard } from 'src/app/common/services/auth-guard.service';

import { CreateAccountComponent } from './create-account/create-account.component';

import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
    { path: 'auth/createAccount/forgotPassword', component: ForgotPasswordComponent },
    { path: 'auth/createAccount', component: CreateAccountComponent },
    { path: 'auth', component: SignInComponent },
    { path: 'auth/create_profile/:uid', component: , canActivate: [AuthGuard] },

     
];
@NgModule({ 
   imports: [RouterModule.forRoot(routes)], 
   exports: [RouterModule] 
})
export class AuthRoutingModule { } export const AuthComponents = [
    SignInComponent,
    CreateAccountComponent,
    ForgotPasswordComponent,
    
];