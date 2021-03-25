import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { WelcomeComponent } from './welcome/welcome.component';



@NgModule({
  declarations: [SignInComponent, WelcomeComponent],
  imports: [
    AuthRoutingModule,
    CommonModule,
    ],
    exports: [
        
    ]

})
export class AuthModule { }
