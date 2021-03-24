import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponents, AuthRoutingModule } from './auth.routing';
import { CompositeModule } from '../composite/composite.module';



@NgModule({
  declarations: [AuthComponents],
  imports: [
    AuthRoutingModule,
    CompositeModule
  ]
})
export class AuthModule { }
