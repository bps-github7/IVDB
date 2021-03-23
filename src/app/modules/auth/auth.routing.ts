import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 

import { CreateAccountComponent } from './create-account/create-account.component';

import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
    { path: 'createAccount/forgotPassword', component: ForgotPasswordComponent },
    { path: 'createAccount', component: CreateAccountComponent },
    { path: '', component: SignInComponent },

     
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