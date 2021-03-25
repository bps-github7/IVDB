import { NgModule } from '@angular/core';
import { AuthComponents, AuthRoutingModule } from './auth.routing';
import { CompositeModule } from '../composite/composite.module';
import { WelcomeComponent } from './welcome/welcome.component';



@NgModule({
  declarations: [AuthComponents],
  imports: [
    AuthRoutingModule,
    CompositeModule
  ]
})
export class AuthModule { }
