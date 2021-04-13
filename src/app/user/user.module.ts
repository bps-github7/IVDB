import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserComponents, UserRoutingModule } from './user-routing.module';


@NgModule({
  declarations: [ UserComponents ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
