import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponents, AuthRoutingModule } from './auth.routing';
import { CompositeModule } from '../composite/composite.module';
import { WelcomeComponent } from './welcome/welcome.component';



@NgModule({
  declarations: [AuthComponents, WelcomeComponent],
  imports: [
    AuthRoutingModule,
    CompositeModule
  ]
})
export class AuthModule { }
