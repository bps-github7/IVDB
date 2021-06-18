import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './content.component';
import { StoreModule } from '@ngrx/store';
import { ContentReducer } from 'src/app/reducers/content.reducer';
import { CrudHubComponent } from './crud-hub/crud-hub.component';
import { ContentEffects } from 'src/app/effects/content.effects';


@NgModule({
  declarations: [
		ContentComponent,
		CrudHubComponent
	],
  imports: [
    CommonModule,
		StoreModule.forFeature('content', ContentReducer),
		EffectsModule.forFeature([ContentEffects]),
		ContentRoutingModule
  ]
})
export class ContentModule { }
