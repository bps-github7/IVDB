import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContribRoutingModule } from './contrib-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ContribComponent } from './contrib.component';


@NgModule({
  declarations: [
		ContribComponent
	],
  imports: [
    CommonModule,
		SharedModule,
    ContribRoutingModule
  ]
})
export class ContribModule { }
